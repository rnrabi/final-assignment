import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import useMyAdvertise from "../../../hooks/useMyAdvertise";


const Advertisement = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const [myAdds] = useMyAdvertise()
    console.log(myAdds)

    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data)
        const name = data.name;
        // ok upload image in image bb
        const imageFile = data.image[0];
        const formData = new FormData();
        formData.append("image", imageFile);
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imagebb_Api_key}`, formData)
        const imageURL = res.data.data.display_url
        // console.log(res.data.data.display_url)

        const description = data.description;
        const status = 'pending'
        const sellerEmail = user?.email;
        console.log(name, description, sellerEmail, status, imageURL)

        const advertiseInfo = { name, description, status, sellerEmail, image: imageURL }

        const { data: advertisement } = await axiosSecure.post('/advertise', advertiseInfo)
        console.log(advertisement)
        if (advertisement.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Submitted for advertisement",
                showConfirmButton: false,
                timer: 1500
            });
            reset()
        }

    }


    return (
        <div>
            <h2 className="text-center text-2xl font-bold my-8">My advertisement medicine</h2>

            <div className="text-right"><button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Add advertisement</button></div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center text-lg">
                            <th>Image</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myAdds?.map(add=> <tr 
                            key={add._id}
                            className="text-center"
                            >
                                <td>
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12 mx-auto">
                                                <img src={add.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {add.name}
                                </td>
                                <td className="text-slate-400">{add.status}</td>
                                {/* <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th> */}
                            </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Add medicine image:</span>
                        </label>
                        <input {...register("image", { required: true })} className="mb-5" type="file" />

                        <label className="label">
                            <span className="label-text">Medicine name:</span>
                        </label>
                        <input {...register("name", { required: true })} className="mb-5 p-1 border-2" type="text" />

                        <label className="label">
                            <span className="label-text">Type some description:</span>
                        </label>
                        <textarea {...register("description", { required: true })} className="border" name="description" id="" cols="40" rows="8"></textarea> <br />
                        <button className="btn btn-outline">Add advertise</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    );
};

export default Advertisement;