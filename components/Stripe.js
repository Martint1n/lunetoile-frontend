import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { MdCardMembership } from 'react-icons/md';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const preorder = {
    product: card,
    price: 29.99,
}


const makePayment = async () => {
    const stripe = await loadStripe('pk_test_51P9EqSEsrCdUsLMuJUcvfBoUVVmVEIPFgBus8RRnVkTCZb9ZqeSdHnnjQdxiTpyXT4W4qG4gAZCDQesaNcyYMdfj00tFOAC5Am');

const response = await fetch(`${apiURL}/create-checkout-session`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ product: preorder })

})

const session = await response.json()

const result = stripe.redirectToCheckout;

}

export default function Stripe() {
    const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
    };

    return (
    <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
    </Elements>
    );
};