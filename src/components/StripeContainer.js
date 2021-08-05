import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_Hcxgz8WAsn2u3Rf7xOxj9mWa00ybGSeYqk"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export const StripeContainer = price => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm price={price.price} />
    </Elements>
  )
}
