
import PropTypes from 'prop-types';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

// import '../styles/common.css';
import './stripe.css';
// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ price }) => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    console.log(price)
    // const [clientSecret , setClientSecret] = useState('')
    const { data: clientSecret, isLoading, isError } = useQuery({
        queryKey: ['payment-intent'],
        queryFn: async () => {
            const { data } = await axiosSecure.post('/create-payment-intent', { price })
            return data.clientSecret;
        }
    })
    console.log(clientSecret)

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !clientSecret) {
        return <div>Error creating payment intent.</div>;
    }

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'unknown',
                    email: user?.email || 'unknown',
                }
            }
        })
        if (confirmError) {
            console.log(confirmError)
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            const paymentInfo = {
                // save to medicine info
                transactionId: paymentIntent.id,
                // date: new Date()
            }
            // database a save korbo 
            // change status
            console.log('success payment',paymentInfo)
        }




    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="mt-8 w-40 rounded-full border-4 border-emerald-400 bg-emerald-500 px-6 py-1 text-lg font-bold text-white transition hover:translate-y-1" disabled={!stripe}>
                    Book Now
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;

CheckoutForm.propTypes = {
    price: PropTypes.number.isRequired
}