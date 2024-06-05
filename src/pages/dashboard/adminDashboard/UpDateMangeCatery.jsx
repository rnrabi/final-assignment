import { useForm } from "react-hook-form";
import useUpdateCategory from "../../../hooks/useUpdateCategory";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const UpDateMangeCatery = () => {
    const { id } = useParams()
    const [updateCategory] = useUpdateCategory(id)
    const axiosSecure = useAxiosSecure()
    console.log(updateCategory)

    const {
        register,
        handleSubmit
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data)

        const category = data.category;
        const description = data.description;
        const dosage = data.dosage;
        const image = data.image;
        const manufacturer = data.manufacturer;
        const name = data.name;
        const price = data.price;
        const quantity = data.quantity;
        const strength = data.strength;

        // console.log(category, description, dosage, image, manufacturer, name, price, quantity, strength)

        const updateInfo = { category, description, dosage, image, manufacturer, name, price, quantity, strength }

        const { data: updateData } = await axiosSecure.post('/allMedicine', updateInfo)
        console.log(updateData)
        if(updateData.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `updated the medicine`,
                showConfirmButton: false,
                timer: 1500
            });
        }

    }



    return (
        <div>
            <h2>This is update manage category</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="flex justify-between gap-10 mb-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">name</span>
                                    </label>
                                    <input defaultValue={updateCategory?.name}  {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">category</span>
                                    </label>
                                    <input defaultValue={updateCategory?.category}  {...register("category", { required: true })} type="text" placeholder="category" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex justify-between gap-10 mb-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">ImageURL</span>
                                    </label>
                                    <input defaultValue={updateCategory?.image_url}  {...register("image", { required: true })} type="text" placeholder="imageURL" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">manufacturer</span>
                                    </label>
                                    <input defaultValue={updateCategory?.manufacturer}  {...register("manufacturer", { required: true })} type="text" placeholder="manufacturer" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex justify-between gap-10 mb-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">dosage form</span>
                                    </label>
                                    <input defaultValue={updateCategory?.dosage_form}  {...register("dosage", { required: true })} type="text" placeholder="dosage" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">quantity</span>
                                    </label>
                                    <input defaultValue={updateCategory?.quantity} {...register("quantity", { required: true })} type="text" placeholder="quantity" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex justify-between gap-10 mb-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">price</span>
                                    </label>
                                    <input defaultValue={updateCategory?.price}  {...register("price", { required: true })} type="text" placeholder="price" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">strength</span>
                                    </label>
                                    <input defaultValue={updateCategory?.strength} {...register("strength", { required: true })} type="text" placeholder="strength" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">description</span>
                                    </label>
                                    <input defaultValue={updateCategory?.description}  {...register("description", { required: true })} type="text" placeholder="description" className="input input-bordered" required />
                                </div>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpDateMangeCatery;