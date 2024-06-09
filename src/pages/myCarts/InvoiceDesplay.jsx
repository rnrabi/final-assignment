import { useQuery } from "@tanstack/react-query";
import logo from "../../assets/logo1.gif"
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useMyCarts from "../../hooks/useMyCarts";

const InvoiceDesplay = () => {
    const { user } = useAuth()
    const [myCarts] = useMyCarts();
    console.log(myCarts)
    const axiosPublic = useAxiosPublic()

    const { data: checkout } = useQuery({
        queryKey: ['checkout', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/myCartsCheckout/${user?.email}`)
            return data;
        }
    })
    console.log(checkout)

    const totalPrice = checkout?.total


    return (
        <div>
            <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
                <h1 className="font-bold text-2xl my-4 text-center text-blue-600 flex justify-center items-center gap-4"> <img src={logo} alt="" /><span>MediGlam</span></h1>
                <hr className="mb-2" />
                <div className="flex justify-between mb-6">
                    <h1 className="text-lg font-bold">Invoice</h1>
                    <div className="text-gray-700">
                        <div>Date: </div>
                        <div>TransactionID: </div>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-lg font-bold mb-4">Bill To:</h2>
                    <div className="text-gray-700 mb-2">{user?.displayName}</div>
                    <div className="text-gray-700">{user?.email}</div>
                </div>
                <table className="w-full mb-8">
                    <thead>
                        <tr>
                            <th className="text-left font-bold text-gray-700">Description</th>
                            <th className="text-right font-bold text-gray-700">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myCarts?.map(cart => <tr key={cart._id}>
                                <td className="text-left text-gray-700">{cart.name}</td>
                                <td className="text-right text-gray-700">${cart.price}</td>
                            </tr>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="text-left font-bold text-gray-700">Grand Total</td>
                            <td className="text-right font-bold text-gray-700">${totalPrice}</td>
                        </tr>
                    </tfoot>
                </table>
                <div className="text-gray-700 mb-2">Thank you for purchase!</div>
            </div>
        </div>
    );
};

export default InvoiceDesplay;