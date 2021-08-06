import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';
import '../style/stripe-container.css';

const PUBLIC_KEY = "pk_test_Hcxgz8WAsn2u3Rf7xOxj9mWa00ybGSeYqk"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export const StripeContainer = (data) => {
  return (
    <div className="stripe-container">
    <h3>Please enter your payment information so that</h3> <img className="payment-img" src={data.piece.src} alt={`Art piece title: ${data.piece.title}`}/><h3>can be yours to treasure!</h3>
      <Elements stripe={stripeTestPromise}>
        <PaymentForm price={data.price} />
      </Elements>
    </div>
  )
}
