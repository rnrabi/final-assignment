import { useQuery } from "@tanstack/react-query";
import logo from "../../assets/logo1.gif"
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import useMyCarts from "../../hooks/useMyCarts";

const InvoiceDesplay = () => {
    const { user } = useAuth()
    // const [myCarts] = useMyCarts();
    // //console.log(myCarts)
    const axiosPublic = useAxiosPublic()

    const { data: userBook } = useQuery({
        queryKey: ['userBook', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/booking/${user?.email}`)
            return data;
        }
    })

    const { data: products } = useQuery({
        queryKey: ['products', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/bookingProducts`)
            return data;
        }
    })

    const myProducts = products?.filter(product => product.email === `${user?.email}`)

    const totalPrice = myProducts?.reduce((sum, items) => sum + items.price, 0);
    const date = new Date().toLocaleDateString()

    // //console.log(userBook)
    // //console.log(products)
    // //console.log(myProducts)



    return (
        <div>
            <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
                <h1 className="font-bold text-2xl my-4 text-center text-blue-600 flex justify-center items-center gap-4"> <img src={logo} alt="" /><span>MediGlam</span></h1>
                <hr className="mb-2" />
                <div className="mb-6">
                    <h1 className="text-lg font-bold">Invoice</h1>
                    <div className="text-gray-700">
                        <div>Date: {date} </div>
                        <div>TransactionID: {userBook?.[0]?.transactionId} </div>
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
                            myProducts?.map(product => <tr key={product._id}>
                                <td className="text-left text-gray-700">{product.name}</td>
                                <td className="text-right text-gray-700">{product.price}</td>
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