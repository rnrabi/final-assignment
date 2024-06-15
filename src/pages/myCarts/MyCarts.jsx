import useMyCarts from "../../hooks/useMyCarts";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";



const MyCarts = () => {
    const { user } = useAuth()
    const [myCarts, refetch] = useMyCarts()
    //console.log(myCarts)
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const [quantities, setQuantities] = useState({});


    // Initialize quantities state based on myCarts data
    useEffect(() => {
        const initialQuantities = {};
        myCarts.forEach(cart => {
            initialQuantities[cart._id] = 1;
        });
        setQuantities(initialQuantities);
    }, [myCarts]);


    const handleIncrease = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1
        }));
    };

    const handleDecrease = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1
        }));
    };


    const handleRemove = async (id) => {
        const { data } = await axiosSecure.delete(`/myCarts/${id}`)
        //console.log(data)
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

    const handleAllClear = async () => {
        const { data } = await axiosPublic.delete(`/myAllCarts/${user?.email}`)
        //console.log(data)
        if (data.deletedCount) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "deleted your all carts",
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
                <button onClick={handleAllClear} className="btn btn-outline">all clear cart </button>
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
                            <th>Total Quantity</th>
                            <th>Your Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myCarts?.map((myCart, idx) => <tr key={myCart._id}>
                                <th>{idx + 1}</th>
                                <td>{myCart.name}</td>
                                <td>{myCart.company}</td>
                                <td>{myCart.price}</td>
                                <td>{myCart.quantity}</td>
                                <td>
                                    <div className="flex gap-6">
                                        <button onClick={() => handleDecrease(myCart._id)}><FaMinus></FaMinus></button>
                                        {quantities[myCart._id]}
                                        <button onClick={() => handleIncrease(myCart._id)}><FaPlus></FaPlus></button>
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