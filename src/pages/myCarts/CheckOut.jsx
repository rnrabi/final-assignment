
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

// import './stripe.css';
import CheckoutForm from './CheckoutForm';
import useMyCarts from '../../hooks/useMyCarts';

const CheckOut = () => {
    const [myCarts] = useMyCarts()
    console.log(myCarts)
    const price = myCarts.reduce((sum, currentItem) => {
        const itemPrice = parseFloat(currentItem?.price || 0)
        const total = sum + itemPrice;
        return total;
    }, 0)
    console.log(price)

    const stripePromise = loadStripe(`${import.meta.env.VITE_stripe_api_key}`);
    return (
        <div>
            <h2>Check out page</h2>
            <div className="w-screen">

                <div className="mx-auto grid max-w-screen-lg px-6 pb-20">
                    <div className="">
                        <p className="font-serif text-xl font-bold text-blue-900">Your Product Amount and Price</p>
                        <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
                            <div className="relative">
                                <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
                                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>
                                <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white">
                                    <span className="mt-2- font-medium">Total Price</span>
                                    <span className="text-xs uppercase">$120</span>
                                </label>
                            </div>

                            <div className="relative">
                                <input className="peer hidden" id="radio_2" type="radio" name="radio" />
                                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>

                                <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white">
                                    <span className="mt-2 font-medium">Total Products</span>
                                    <span className="text-xs uppercase">10</span>
                                </label>
                            </div>

                            {/* <div className="relative">
                                <input className="peer hidden" id="radio_3" type="radio" name="radio" />
                                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>

                                <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white">
                                    <span className="mt-2 font-medium">Investment Advice</span>
                                    <span className="text-xs uppercase">1 Hour</span>
                                </label>
                            </div> */}
                        </div>
                    </div>



                    <div className="">
                        <p className="mt-8 font-serif text-xl font-bold text-blue-900">Select a date</p>
                        <div className="relative mt-4 w-56">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg aria-hidden="true" className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path></svg>
                            </div>
                            <input type="text" className="datepicker-input block w-full rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 pl-10 text-emerald-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm" placeholder="Select date" />
                        </div>
                    </div>

                    <div className="">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm price={price} />
                        </Elements>
                    </div>
                </div>
            </div>

            {/* <script src="https://unpkg.com/flowbite@1.5.2/dist/datepicker.js"></script> */}

        </div>
    );
};

export default CheckOut;