import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

export default function Stripe({ firstName, lastName, country, phoneNumber, address, zipCode, email, price, artist, city, deckNumber }) {
  const [stripePromise, setStripePromise] = useState(null);

  const fields = [firstName, lastName, country, phoneNumber, address, zipCode, email, city]
  const areAllFieldsFilled = fields.every(value => typeof value === 'string' && value.trim() !== '');

  useEffect(() => {
    const loadStripeScript = async () => {
      const stripe = await loadStripe('pk_live_51PlVInAWrSK8ZKKic0n5c0sYmfacwbmWmLoIAg1HmhuqHDrsUDzFaCihRfvgB4gMz8q3EraGnyCWLcIefcLtwSl700t3MibJq6');
      setStripePromise(stripe);
    };

    loadStripeScript();
  }, []);

  const makePayment = async () => {
    
    if (areAllFieldsFilled) {
      console.log("Tous les champs sont remplis !");
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (!emailPattern.test(email)) {
        alert("L'adresse email est invalide.");
        return;
      }

      const response = await fetch('https://lunetoile-backend.vercel.app/testpayment/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: 'card', price, firstName, lastName, city, country, phoneNumber, address, zipCode, email, artist, deckNumber}),
      });

      const session = await response.json();
      console.log(session);
      const result = await stripePromise.redirectToCheckout({ sessionId: session.id });
      console.log(result);

      if (result.error) {
        console.error(result.error);
      }
    }else {
      console.log("Veuillez remplir tous les champs.");
      alert("Remplissez tous les champs")
    }
  };

  const makeTest = async () => {
    const response = await fetch('https://lunetoile-backend.vercel.app/testpayment/testdb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });

    const session = await response.json();
    console.log('session', session)
  };

  return (
    <button onClick={makePayment} disabled={!stripePromise} className={`hover:bg-gold hover:text-black rounded-3xl min-h-[56px] sm:min-h-[48px] font-montserrat font-bold flex items-center justify-center transition-all duration-300 px-4 sm:px-8 whitespace-nowrap bg-gold text-black `}>
      <span className="body-m sm:body-s tracking-wide">
        Précommander
      </span>
    </button>
  );
}
