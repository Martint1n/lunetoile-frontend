import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51P9EqSEsrCdUsLMuJUcvfBoUVVmVEIPFgBus8RRnVkTCZb9ZqeSdHnnjQdxiTpyXT4W4qG4gAZCDQesaNcyYMdfj00tFOAC5Am''pk_test_51P9EqSEsrCdUsLMuJU...aNcyYMdfj00tFOAC5Am');

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