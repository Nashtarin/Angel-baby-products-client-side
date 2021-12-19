import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router';
const stripePromise = loadStripe('pk_test_51JwRV1CllpOSUch4D4R5XBSvEqXDG3w6dn4VdPGJmzsvWmbarvJpmZFXAolUqnFS0tXZm8eg16YL0neBOexc3VJU00iK2P8ofZ');

const Payment = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://secure-garden-78114.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const { img, name, imported, price, description, delivery, quantity,_id } = product;
    return (
        <div>
            <Elements stripe={stripePromise} >
                <CheckOutForm price={price}/>
            </Elements>

        </div>
    );
};

export default Payment;