import { useForm } from "react-hook-form";
import useUpdateCategory from "../../../hooks/useUpdateCategory";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const UpDateMangeCatery = () => {
    const { id } = useParams()
    const [updateCategory] = useUpdateCategory(id)
    console.log(updateCategory)
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit
    } = useForm({
        defaultValues: {
            name: updateCategory?.name,
            category: updateCategory?.category,
            dosage: updateCategory?.dosage,
            image: updateCategory?.image_url,
            price: updateCategory?.price,
            quantity: updateCategory?.quantity,
            strength: updateCategory?.strength,
            description: updateCategory?.description,
            manufacturer: updateCategory?.manufacturer

        }
    })

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
        // console.log(updateData)
        if (updateData.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `updated the medicine`,
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/dashboard/manageCategory')
        }

    }


    if (!updateCategory) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    return (
        <div>
            <h2 className="text-center text-xl font-bold">Update the medicine category</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="flex justify-between gap-10 mb-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">name</span>
                                    </label>
                                    <input {...register("name", { required: true })} type="text" 
                                    defaultValue={updateCategory?.name}
                                    placeholder="name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">category</span>
                                    </label>
                                    <input   {...register("category", { required: true })} type="text" 
                                    defaultValue={updateCategory?.category}
                                    placeholder="category" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex justify-between gap-10 mb-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">ImageURL</span>
                                    </label>
                                    <input {...register("image", { required: true })} type="text" 
                                      defaultValue={updateCategory?.image}
                                    placeholder="imageURL" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">manufacturer</span>
                                    </label>
                                    <input  {...register("manufacturer", { required: true })} type="text" 
                                      defaultValue={updateCategory?.manufacturer}
                                    placeholder="manufacturer" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex justify-between gap-10 mb-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">dosage form</span>
                                    </label>
                                    <input  {...register("dosage", { required: true })} type="text" 
                                      defaultValue={updateCategory?.dosage}
                                    placeholder="dosage" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">quantity</span>
                                    </label>
                                    <input  {...register("quantity", { required: true })} type="text" 
                                      defaultValue={updateCategory?.quantity}
                                    placeholder="quantity" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex justify-between gap-10 mb-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">price</span>
                                    </label>
                                    <input  {...register("price", { required: true })} type="text" 
                                      defaultValue={updateCategory?.price}
                                    placeholder="price" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">strength</span>
                                    </label>
                                    <input  {...register("strength", { required: true })} type="text" 
                                      defaultValue={updateCategory?.strength}
                                    placeholder="strength" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">description</span>
                                    </label>
                                    <input   {...register("description", { required: true })} type="text" 
                                      defaultValue={updateCategory?.description}
                                    placeholder="description" className="input input-bordered" required />
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