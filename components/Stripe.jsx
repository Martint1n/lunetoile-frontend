import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

export default function Stripe({ firstName, lastName, country, phoneNumber, address, zipCode, deckNumber, email, price }) {
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
      body: JSON.stringify({ product: 'card', price, firstName, lastName, country, phoneNumber, address, zipCode, email}),
    });

    const session = await response.json();
    const result = await stripePromise.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.error(result.error);
    }
  };

  return (
    <button onClick={makePayment} disabled={!stripePromise}>
      Make Payment
    </button>
  );
}
