
import PropTypes from 'prop-types';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import './stripe.css';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import useMyCarts from '../../hooks/useMyCarts';

const CheckoutForm = ({ price }) => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    console.log(price)
    const navigate = useNavigate()
    const [myCarts] = useMyCarts()
    console.log(...myCarts)

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
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

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
                products: [...myCarts],
                transactionId: paymentIntent.id,
                totalPrice: price,
                customar: {
                    name: user?.displayName,
                    email: user?.email
                },

                status: 'confirm'

            }
            // save in database
            const { data } = await axiosSecure.post('/booking', paymentInfo)
            console.log(data)
            const res = await axiosSecure.patch(`/updateCartStatus/${user?.email}`)
            console.log(res.data)

            console.log('success payment', paymentInfo)
            navigate('/invoice')
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