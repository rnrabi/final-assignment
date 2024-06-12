import useMyCarts from "../../hooks/useMyCarts";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link} from "react-router-dom";
import { Helmet } from "react-helmet-async";



const MyCarts = () => {
    const [myCarts, refetch] = useMyCarts()
    console.log(myCarts)
    const axiosPublic = useAxiosPublic()
    const [quantity, setQuantity] = useState(0)

    const handleIncrise = () => {
        setQuantity(quantity + 1)
    }

    const handleRemove = async (id) => {
        const { data } = await axiosPublic.delete(`/myCarts/${id}`)
        console.log(data)
        if (data.deletedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Removed success fully",
                showConfirmButton: false,
                timer: 1500
            });
            refetch()
        }
    }


    return (
        <div>
             <Helmet>
                <title>MediGlam | MyCarts</title>
            </Helmet>
            <div className="flex justify-center items-center gap-5">
                <h2 className="text-xl font-bold text-center my-10">My Carts</h2> <Link to='checkOut'><button className="btn btn-sm bg-slate-300">Check Out</button></Link>
            </div>

            <div>
                <button className="btn btn-outline">all clear caart </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Price/unite</th>
                            <th>Quantity</th>
                            <th>Your Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myCarts.map((myCart, idx) => <tr key={myCart._id}>
                                <th>{idx + 1}</th>
                                <td>{myCart.name}</td>
                                <td>{myCart.company}</td>
                                <td>{myCart.price}</td>
                                <td>{myCart.quantity}</td>
                                <td>
                                    <div className="flex gap-6">
                                        <button><FaMinus></FaMinus></button>
                                        {quantity}
                                        <button onClick={handleIncrise}><FaPlus></FaPlus></button>
                                    </div>
                                </td>
                                <td><button onClick={() => handleRemove(myCart._id)} className="btn">remove</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCarts;