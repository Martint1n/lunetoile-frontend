import Preorder from '../components/Preorder';
import Stripe from '../components/Stripe'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Index() {
    return (
        <>
        <Preorder />
        <Stripe />
        </>
    )
}

export default Index;