import { useParams } from "react-router-dom";
import useSpecificCategory from "../../../hooks/useSpecificCategory";
import { FaEye } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useMyCarts from "../../../hooks/useMyCarts";
import { Helmet } from "react-helmet-async";


const SpesicCategoryDetails = () => {
    const [categoryData, setCategoryData] = useState({})
    const { user } = useAuth()
    const { category } = useParams()
    const [specificCategory] = useSpecificCategory(category)
    //console.log(specificCategory)
    const [, refetch] = useMyCarts()
    const axiosPublic = useAxiosPublic()

    const handleDetails = async (id) => {
        //console.log(id)
        const res = await axiosPublic.get(`/allMedicine/${id}`)
        setCategoryData(res.data)
    }
    const handleClick = (id) => {
        document.getElementById('my_modal_3').showModal()
        handleDetails(id)
    }

    //console.log(categoryData)

    const handleAddToCart = async (id) => {
        handleDetails(id)
        const name = categoryData.name;
        const email = user?.email;
        const price = categoryData.price;
        const quantity = categoryData.quantity;
        const company = categoryData.manufacturer;

        //console.log(name, email, price, quantity, company)
        const myMediInfo = { name, email, price, quantity, company }

        const resMedi = await axiosPublic.post('/myCarts', myMediInfo)
        //console.log(resMedi.data)
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
    }


    if (!specificCategory) return <span>loading .... </span>
    return (
        <div>
             <Helmet>
                <title>MediGlam | Category</title>
            </Helmet>
            <h2 className="text-center text-2xl font-bold my-6">Here all <span className="text-slate-400">{category}</span> categories</h2>
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
                            specificCategory.map((category, index) => <tr
                                key={category._id}
                            >
                                <th>{index + 1}</th>
                                <td>{category.name}</td>
                                <td>{category.category}</td>
                                <td className="flex gap-9">
                                    <button onClick={() => handleAddToCart(category._id)} className="btn">select</button>

                                    <button onClick={() => handleClick(category._id)} className="btn"><FaEye className="text-xl"></FaEye></button>
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
                        <img className="rounded-xl w-96 h-60" src={categoryData?.image} alt="" />
                        <h2 className="text-2xl font-semibold leading-tight tracking-wide">{categoryData.name}</h2>
                        <p className="flex-1 text-center dark:text-gray-600">{categoryData.description}</p>
                        <div className="flex justify-between gap-12">
                            <div>
                                <h2>Category:{categoryData?.category}</h2>
                                <h2>Dosage:{categoryData?.dosage}</h2>
                                <h2>Manufacturer:{categoryData?.manufacturer}</h2>
                            </div>
                            <div>
                                <h2>Price:${categoryData?.price}</h2>
                                <h2>Quantity:{categoryData?.quantity}</h2>
                                <h2>Strength:{categoryData?.strength}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default SpesicCategoryDetails;