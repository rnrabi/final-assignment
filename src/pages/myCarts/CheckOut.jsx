
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const CheckOut = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: checkout } = useQuery({
        queryKey: ['checkout', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/myCartsCheckout/${user?.email}`)
            return data;
        }
    })
    // console.log(checkout)

    const totalPrice = checkout?.total.toFixed(2)
    // console.log(totalPrice)

    if (!totalPrice) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    const stripePromise = loadStripe(`${import.meta.env.VITE_stripe_api_key}`);

    return (
        <div>
            <Helmet>
                <title>MediGlam | Checkout</title>
            </Helmet>
            <div className="w-screen md:mt-20">

                <div className="mx-auto grid max-w-screen-lg px-6 pb-20">
                    <div className="">
                        <p className="font-serif text-xl font-bold text-blue-900">Your Product Amount and Price</p>
                        <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
                            <div className="relative">
                                <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
                                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>
                                <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white">
                                    <span className="mt-2- font-medium">Total Price</span>
                                    <span className="text-xs uppercase">${totalPrice}</span>
                                </label>
                            </div>

                            <div className="relative">
                                <input className="peer hidden" id="radio_2" type="radio" name="radio" />
                                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>

                                <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white">
                                    <span className="mt-2 font-medium">Total Products</span>
                                    <span className="text-xs uppercase">{checkout?.products}</span>
                                </label>
                            </div>

                        </div>
                    </div>



                    <div className="md:mt-44">
                        <p className="mt-8 font-serif text-xl font-bold text-blue-900">Fill Up Form</p>
                    </div>

                    <div className="">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm price={totalPrice} />
                        </Elements>
                    </div>
                </div>
            </div>

            {/* <script src="https://unpkg.com/flowbite@1.5.2/dist/datepicker.js"></script> */}

        </div>
    );
};

export default CheckOut;