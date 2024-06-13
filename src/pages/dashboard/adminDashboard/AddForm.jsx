import { useForm } from "react-hook-form"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAllMedicine from "../../../hooks/useAllMedicine";
import useAuth from "../../../hooks/useAuth";
// import useSlider from "../../../hooks/useSlider";

const AddForm = () => {
    const { user } = useAuth()
    const [, refetch] = useAllMedicine()
    // const [image, refetch] = useSlider()
    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data)
        const name = data.name;
        const category = data.category;
        const image = data.photo;
        const manufacturer = data.company;
        const quantity = parseFloat(data.quantity);
        const price = parseFloat(data.price);
        const dosage = data.dosage;
        const strength = data.strength;
        const discount = parseFloat(data.discount);
        const description = data.description;
        const admin = { email: user?.email }

        console.log(name, category, image, manufacturer, quantity, price, dosage, strength,discount, description, admin)

        const medicineAdd = { name, category, image, manufacturer, quantity, price, dosage, strength,discount, description, admin }

        const { data: addMedi } = await axiosSecure.post('/allMedicine', medicineAdd)
        // console.log(addMedi)
        const { data: banner } = await axiosSecure.put('/banner', { image })
        // console.log(banner)
        if (banner.acknowledged) {
            refetch()
        }

        if (addMedi.acknowledged) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `success fully add the medicine`,
                showConfirmButton: false,
                timer: 1500
            });
            refetch()
        }

        reset()
    }

    return (
        <div>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="p-6 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Name</label>
                                <input {...register("name", { required: true })} id="name" type="text" placeholder="name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="category" className="text-sm">category</label>
                                <input {...register("category", { required: true })} id="category" type="text" placeholder="category" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="photo" className="text-sm">photo</label>
                                <input {...register("photo", { required: true })} id="photo" type="text" placeholder="photo URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="company" className="text-sm">company</label>
                                <input {...register("company", { required: true })} id="company" type="text" placeholder="company" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="price" className="text-sm">price</label>
                                <input {...register("price", { required: true })} id="price" type="number" placeholder="price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="quantity" className="text-sm">quantity</label>
                                <input {...register("quantity", { required: true })} id="quantity" type="number" placeholder="quantity" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="strength" className="text-sm">strength</label>
                                <input {...register("strength", { required: true })} id="strength" type="text" placeholder="strength" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="dosage" className="text-sm">dosage</label>
                                <input {...register("dosage", { required: true })} id="dosage" type="text" placeholder="dosage" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="discount" className="text-sm">discount</label>
                                <input {...register("discount", { required: true })} id="discount" type="number" 
                                defaultValue={0}
                                placeholder="discount" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="description" className="text-sm">description</label>
                                <input {...register("description", { required: true })} id="description" type="text" placeholder="description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                        </div>
                    </fieldset>
                    <input className="btn" type="submit" value='Add Category' />
                </form>
            </section>
        </div>
    );
};

export default AddForm;