import { useForm } from "react-hook-form";


const ManageMedicine = () => {
    const {
        register,
        handleSubmit
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <h2 className="text-2xl text-center font-bold my-10">My added medicine</h2>

            <div className="text-right"><button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn bg-gray-400">Add Medicine</button></div>

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
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>name</td>
                            <td>Category</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Remove</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>


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
                                            <input  {...register("price", { required: true })} type="text" placeholder="price" className="input input-bordered" required />
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