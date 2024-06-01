import useMyCarts from "../../hooks/useMyCarts";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";



const MyCarts = () => {
    const [myCarts] = useMyCarts()
    console.log(myCarts)
    const [quantity, setQuantity] = useState(0)

    const handleIncrise = () => {
        setQuantity(quantity + 1)
    }


    return (
        <div>
            <h2 className="text-xl font-bold text-center my-10">My Carts</h2>
            <div>
                <h2>all clear caart </h2>
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
                                <td><button className="btn">remove</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCarts;