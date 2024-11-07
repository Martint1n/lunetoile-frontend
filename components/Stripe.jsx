import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

export default function Stripe({ firstName, lastName, country, phoneNumber, address, zipCode, email, price, artist, city }) {
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    const loadStripeScript = async () => {
      const stripe = await loadStripe('pk_test_51P9EqSEsrCdUsLMuJUcvfBoUVVmVEIPFgBus8RRnVkTCZb9ZqeSdHnnjQdxiTpyXT4W4qG4gAZCDQesaNcyYMdfj00tFOAC5Am');
      setStripePromise(stripe);
    };

    loadStripeScript();
  }, []);

  const makePayment = async () => {
    const response = await fetch('https://lunetoile-backend.vercel.app/testpayment/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product: 'card', price, firstName, lastName, city, country, phoneNumber, address, zipCode, email, artist}),
    });

    const session = await response.json();
    const result = await stripePromise.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.error(result.error);
    }
  };

  const makeTest = async () => {
    const response = await fetch('https://lunetoile-backend.vercel.app/testpayment/sendtestmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });

    const session = await response.json();
    console.log('session', session)
  };

  return (
    <button onClick={makeTest} disabled={!stripePromise} className={`rounded-3xl w-full h-12`}>
      Précommander
    </button>
  );
}
