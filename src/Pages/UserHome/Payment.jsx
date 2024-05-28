import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "./../../CommonRoute/SectionTitle";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
  return (
    <div className="space-y-10 lg:w-1/2 mx-auto">
      <SectionTitle heading={"Payment Stripe"} subHeading={"--Hurry Up--"}></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
