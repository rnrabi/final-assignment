import useAllMedicine from "../../../hooks/useAllMedicine";
import { AiTwotoneDelete } from "react-icons/ai";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import AddForm from "./AddForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const ManageCategory = () => {
    const [allMedicine, refetch] = useAllMedicine()
    const axiosSecure = useAxiosSecure()

    const handleDelete = async (deleteId, image, medicine) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const { data } = await axiosSecure.delete(`/allMedicine/${deleteId}`)
                const { data: bannerImageDelete } = await axiosSecure.delete(`/banner?image=${image}`)
                console.log(bannerImageDelete)

                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${medicine.category} is deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            }
        });

    }


    return (
        <div>
            <Helmet>
                <title>Dashboard | ManageCategory</title>
            </Helmet>
            <h2 className="text-center text-xl my-10 font-bold">All Category OF Medicine</h2>
            <div className="text-end">
                <button className="btn btn-outline" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Category</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th className="text-center">Action</th>
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
                                <td className="flex justify-center gap-9">
                                    <Link to={`/dashboard/updateManage/${medicine._id}`}><button className="btn">Update</button></Link>

                                    <button onClick={() => handleDelete(medicine._id, medicine.image, medicine)} className="btn" ><AiTwotoneDelete className="text-xl text-red-600"></AiTwotoneDelete></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>



            {/* Open the modal using document.getElementById('ID').showModal() method */}


            <dialog id="my_modal_1" className="modal w-full">
                <div className="modal-box w-full">

                    <AddForm></AddForm>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>



        </div>
    );
};

export default ManageCategory;