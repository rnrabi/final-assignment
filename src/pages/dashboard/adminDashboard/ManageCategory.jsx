import useAllMedicine from "../../../hooks/useAllMedicine";
import { AiTwotoneDelete } from "react-icons/ai";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageCategory = () => {
    const [allMedicine, refetch] = useAllMedicine()
    console.log(allMedicine)
    const axiosSecure = useAxiosSecure()

    const handleDelete = async (deleteId, medicine) => {
        const { data } = await axiosSecure.delete(`/allMedicine/${deleteId}`)
        console.log(data)
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


    return (
        <div>
            <h2 className="text-center text-xl my-10 font-bold">All Category OF Medicine</h2>
            <div className="text-end">
                <button className="btn btn-outline">Add Category</button>
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
                                    <button className="btn">Update</button>

                                    <button onClick={() => handleDelete(medicine._id, medicine)} className="btn" ><AiTwotoneDelete className="text-xl text-red-600"></AiTwotoneDelete></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCategory;