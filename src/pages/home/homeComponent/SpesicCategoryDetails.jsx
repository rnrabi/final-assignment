import { useParams } from "react-router-dom";
import useSpecificCategory from "../../../hooks/useSpecificCategory";
import { FaEye } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useMyCarts from "../../../hooks/useMyCarts";


const SpesicCategoryDetails = () => {
    const [categoryData, setCategoryData] = useState({})
    const { user } = useAuth()
    const { category } = useParams()
    const [specificCategory] = useSpecificCategory(category)
    console.log(specificCategory)
    const [, refetch] = useMyCarts()
    // const [allMedicine] = useAllMedicine()
    // console.log(allMedicine)
    const axiosPublic = useAxiosPublic()

    const handleDetails = async (id) => {
        console.log(id)
        const res = await axiosPublic.get(`/allMedicine/${id}`)
        setCategoryData(res.data)
    }
    const handleClick = (id) => {
        document.getElementById('my_modal_3').showModal()
        handleDetails(id)
    }

    console.log(categoryData)

    const handleAddToCart = async (id) => {
        handleDetails(id)
        const name = categoryData.name;
        const email = user?.email;
        const price = categoryData.price;
        const quantity = categoryData.quantity;
        const company = categoryData.manufacturer;

        console.log(name, email, price, quantity, company)
        const myMediInfo = { name, email, price, quantity, company }

        const resMedi = await axiosPublic.post('/myCarts', myMediInfo)
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
    }



    if (!specificCategory) return <span>loading .... </span>
    return (
        <div>
            <h2 className="text-center text-2xl font-bold my-6">Here all <span className="text-slate-400">{category}</span> categories</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 fill-current shrink-0 dark:text-violet-600">
                            <path d="M68.328,383.063a31.654,31.654,0,0,1,.207-32.118l50.883-86.406,11.516,50.76,31.207-7.08L138.257,202.944,32.983,226.828l7.08,31.207,53.149-12.058L40.96,334.707a64,64,0,0,0,55.149,96.476h82.435l32-32H96.109A31.655,31.655,0,0,1,68.328,383.063Z"></path>
                            <path d="M283.379,79.762l53.747,91.268-49.053-7.653-4.934,31.617L389.8,211.635l16.64-106.66-31.617-4.933-8.873,56.87L310.954,63.524a64,64,0,0,0-110.3,0l-39.939,67.82,10.407,45.39,57.106-96.972a32,32,0,0,1,55.148,0Z"></path>
                            <path d="M470.65,334.707l-47.867-81.283-41.148-6.812,61.441,104.333A32,32,0,0,1,415.5,399.183H304.046l38.359-38.358L319.778,338.2l-76.332,76.332,76.332,76.333,22.627-22.628-37.052-37.051H415.5a64,64,0,0,0,55.149-96.476Z"></path>
                        </svg>
                        <h2 className="text-2xl font-semibold leading-tight tracking-wide">{ }</h2>
                        <p className="flex-1 text-center dark:text-gray-600">{ }</p>
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
                        <button type="button" className="btn btn-outline px-8 py-3 font-semibold rounded-full dark:bg-violet-600 dark:text-gray-50">Select</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default SpesicCategoryDetails;