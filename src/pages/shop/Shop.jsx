import useAllMedicine from "../../hooks/useAllMedicine";
import { FaEye } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useMyCarts from "../../hooks/useMyCarts";
import { Helmet } from "react-helmet-async";


const Shop = () => {
    const { user } = useAuth()
    const [singleMedi, setSingleMedi] = useState({})
    const [allMedicine] = useAllMedicine()
    console.log(allMedicine)
    const [, refetch] = useMyCarts()
    const axiosPublic = useAxiosPublic()

    const handleDetails = async (id) => {
        console.log(id)
        const res = await axiosPublic.get(`/allMedicine/${id}`)
        setSingleMedi(res.data)
    }
    const handleClick = (id) => {
        document.getElementById('my_modal_3').showModal()
        handleDetails(id)
    }
    // console.log(singleMedi)

    const handleAddToCart = async (id) => {
        // handleDetails(id)
        axiosPublic.get(`/allMedicine/${id}`)
            .then( async res => {
                console.log(res.data)
                const name = res.data.name;
                const email = user?.email;
                const price = parseFloat(res.data.price);
                const quantity = parseInt(res.data.quantity);
                const seller = res.data.seller;
                const category = res.data.category;
                const description = res.data.description;
                const dosage = res.data.dosage;
                const company = res.data.manufacturer;
                const strength = res.data.strength;
                const buyer = {
                    name: user?.displayName,
                    email: user?.email
                }
                const status = 'pending'


                // console.log(name, email, price, quantity, company, seller, category, description, dosage, strength, buyer)
                const myMediInfo = { name, email, price, quantity, company, seller, category, description, dosage, strength, buyer, status }

                const resMedi =await axiosPublic.post('/myCarts', myMediInfo)
                console.log(resMedi.data)

                if (resMedi.data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You have added to cart",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }


            })


    }



    return (
        <div>
            <Helmet>
                <title>MediGlam | Shop</title>
            </Helmet>
            <h2 className="text-center text-2xl font-bold my-6">Our All Medicine</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Chose any</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allMedicine.map((medicine, index) => <tr
                                key={medicine._id}
                            >
                                <th>{index + 1}</th>
                                <td>{medicine.name}</td>
                                <td>{medicine.category}</td>
                                <td className="flex gap-9">
                                    <button onClick={() => handleAddToCart(medicine._id)} className="btn"
                                    // disabled={!user?.email}
                                    >select</button>

                                    <button className="btn" onClick={() => handleClick(medicine._id)}><FaEye className="text-xl"></FaEye></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>




            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">

                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>


                    <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                        <img className="w-96 h-60" src={singleMedi?.image} alt="" />
                        <h2 className="text-2xl font-semibold leading-tight tracking-wide">{singleMedi.name}</h2>
                        <p className="flex-1 text-center dark:text-gray-600">{singleMedi.description}</p>
                        <div className="flex justify-between gap-12">
                            <div>
                                <h2>Category:{singleMedi.category}</h2>
                                <h2>Dosage:{singleMedi.dosage}</h2>
                                <h2>Manufacturer:{singleMedi.manufacturer}</h2>
                            </div>
                            <div>
                                <h2>Price:${singleMedi.price}</h2>
                                <h2>Quantity:{singleMedi.quantity}</h2>
                                <h2>Strength:{singleMedi.strength}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>

        </div>

    );
};

export default Shop;