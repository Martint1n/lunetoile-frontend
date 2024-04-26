import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

export default function Stripe() {

    
    
    const makePayment = async () => {
        const stripe = await loadStripe('pk_test_51P9EqSEsrCdUsLMuJUcvfBoUVVmVEIPFgBus8RRnVkTCZb9ZqeSdHnnjQdxiTpyXT4W4qG4gAZCDQesaNcyYMdfj00tFOAC5Am');
    
    const response = await fetch(`http://localhost:3000/testpayment/create-checkout-session`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            product: 'card',
            price: 29.99 
        })
    
    })
    
    const session = await response.json()
    
    const result = stripe.redirectToCheckout({
        sessionId: session.id
    })

    if(result.error){
        console.log(result.error)
        }
    }


    return (
    
        <button onClick={makePayment}>makePayment</button>
    
    );
};