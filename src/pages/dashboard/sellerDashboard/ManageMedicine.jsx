import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import useAllMedicineEmail from "../../../hooks/useAllMedicineEmail";



const ManageMedicine = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [sellerMedi, refetch] = useAllMedicineEmail()
    console.log(sellerMedi)

    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        const category = data.category;
        const description = data.description;
        const dosage = data.dosage;
        const image = data.image;
        const manufacturer = data.manufacturer;
        const name = data.name;
        const price = data.price;
        const quantity = data.quantity;
        const strength = data.strength;
        const seller = {
            name:user?.displayName,
            email: user?.email
        }


        console.log(category, description, dosage, image, manufacturer, name, price, quantity, strength, seller)

        const addMedicine = { category, description, dosage, image, manufacturer, name, price, quantity, strength, seller }

        const { data: addedMedi } = await axiosSecure.post('/allMedicine', addMedicine)
        console.log(addedMedi)
        if (addedMedi.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Added the medicine`,
                showConfirmButton: false,
                timer: 1500
            });
            refetch()
        }

        reset()
    }

    const handleRemove = async(id) => {
        console.log(id)
        const { data } = await axiosSecure.delete(`/allMedicine/${id}`)
        console.log(data)
        if(data.deletedCount>0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Removed the medicine`,
                showConfirmButton: false,
                timer: 1500
            });
        }

        refetch()
    }





    return (
        <div>
            <h2 className="text-2xl text-center font-bold my-10">My added medicine</h2>

            <div className="text-right"><button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn bg-gray-400">Add Medicine</button></div>

            {/* Table of seller added medicine */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellerMedi?.map((medi, idx) => <tr key={medi._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                {/* <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" /> */}
                                                <h2>TODO</h2>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{medi.name}</td>
                                <td>{medi.category}</td>
                                <th>
                                    <button onClick={() => handleRemove(medi._id)} className="btn btn-ghost btn-xs">Remove</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

            {/* modal form */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box min-w-fit">

                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <div className="hero min-h-full bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div className="card shrink-0 w-full shadow-2xl bg-base-100">

                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                                    <div className="flex justify-between gap-10 mb-5">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">name</span>
                                            </label>
                                            <input {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" required />
                                        </div>

                                        <div className="form-control w-1/3">
                                            <label className="label">
                                                <span className="label-text">category</span>
                                            </label>

                                            <select  {...register("category", { required: true })} className="border">
                                                <option value="tablet">tablet</option>
                                                <option value="syrap">syrap</option>
                                                <option value="capcule">capcule</option>
                                                <option value="injection">injection</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex justify-between gap-10 mb-5">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Upload image</span>
                                            </label>
                                            <input {...register("image", { required: true })} type="file" placeholder="imageURL" />
                                        </div>

                                        <div className="form-control w-1/3">
                                            <label className="label">
                                                <span className="label-text">manufacturer</span>
                                            </label>

                                            <select {...register("manufacturer", { required: true })} className="border">
                                                <option value="squire">squire</option>
                                                <option value="opsonin">opsonin</option>
                                                <option value="skF">skF</option>
                                                <option value="Ziska">Ziska</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="flex justify-between gap-10 mb-5">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">dosage form</span>
                                            </label>
                                            <input  {...register("dosage", { required: true })} type="text" placeholder="dosage" className="input input-bordered" required />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">quantity</span>
                                            </label>
                                            <input  {...register("quantity", { required: true })} type="text" placeholder="quantity" className="input input-bordered" required />
                                        </div>
                                    </div>
                                    <div className="flex justify-between gap-10 mb-5">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">price</span>
                                            </label>
                                            <input  {...register("price", { required: true })} type="number" placeholder="price" className="input input-bordered" required />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">strength</span>
                                            </label>
                                            <input  {...register("strength", { required: true })} type="text" placeholder="strength" className="input input-bordered" required />
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">description</span>
                                            </label>
                                            <input   {...register("description", { required: true })} type="text" placeholder="description" className="input input-bordered" required />
                                        </div>

                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Add medicine</button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </dialog>
        </div>
    );
};

export default ManageMedicine;