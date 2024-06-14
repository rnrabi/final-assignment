

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCustomerDetails from "../../../hooks/useCustomerDetails";
import { Helmet } from "react-helmet-async";


const PaymentHistory = () => {

    const axiosPublic = useAxiosPublic()
    const [sellers] = useCustomerDetails()
    console.log(sellers)


    // console.log(sellers && sellers[0].buyer.email)
    const customerEmail = sellers && sellers[0]?.buyer?.email;
    console.log(customerEmail)
    const { data: customerDetails } = useQuery({
        queryKey: ['customer'],
        enabled: !!customerEmail,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/booking/${customerEmail}`)
            return data;
        }
    })

    console.log(customerDetails)


    return (
        <div>
            <Helmet>
                <title>Dashboard | PaymentHistory</title>
            </Helmet>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight text-center">Payment History</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-center">
                                <th className="p-3">Transaction ID</th>
                                <th className="p-3">Client</th>
                                <th className="p-3">Amount</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                customerDetails?.map((customer) => <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 text-center" key={customer._id}>
                                    <td className="p-3">
                                        <p>{customer.transactionId}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{customer.cutomar?.name || 'unknown'}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>$ {customer.totalPrice}</p>
                                    </td>
                                    <td className="p-3">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <span>{customer?.status}</span>
                                        </span>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;