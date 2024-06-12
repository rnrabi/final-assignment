import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const UserPaymentHistory = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const { data: userDetails } = useQuery({
        queryKey: ['userDetails'],
        enabled: !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/booking/${user?.email}`)
            return data;
        }
    })
    console.log(userDetails)
    const inTotal = userDetails?.reduce((sum, items) => sum + parseFloat(items.totalPrice), 0)


    return (
        <div>
            <h2 className="text-center font-bold text-2xl my-5">My payment history</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Status</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userDetails?.map(details => <tr key={details._id}>
                                <th>{details.transactionId}</th>
                                <td>{details.status}</td>
                                <td>$ {details.totalPrice}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
                <div className="text-xl font-bold mt-10 p-5">In Total Price : $ {inTotal}</div>
            </div>
        </div>
    );
};

export default UserPaymentHistory;