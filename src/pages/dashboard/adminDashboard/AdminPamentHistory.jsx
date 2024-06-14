import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AdminPamentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: paymentHistory, refetch } = useQuery({
        queryKey: [user?.email, 'paymentHistory'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking`)
            return res.data;
        }
    })
    console.log(paymentHistory)

    const handlePaymentAccept = async (id) => {
        console.log(id)
        const { data } = await axiosSecure.put(`/bookingUpdate/${id}`)
        console.log(data)
        if (data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Payment accepted",
                showConfirmButton: false,
                timer: 1500
            });
            refetch()
        }
    }


    return (
        <div>
            <Helmet>
                <title>Dashboard | PaymentHistory</title>
            </Helmet>
            <h2 className="text-center text-2xl font-bold my-5">Payment history</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory?.map(history => <tr key={history._id}>
                                <td>{history.customar.name}</td>
                                <td>{history.adminStatus}</td>
                                <td><button onClick={() => handlePaymentAccept(history._id)} className="btn btn-outline btn-sm">Accept Payment</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPamentHistory;