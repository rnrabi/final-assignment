import { useForm } from "react-hook-form"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAllMedicine from "../../../hooks/useAllMedicine";

const AddForm = () => {
    const [, refetch] = useAllMedicine()
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
        const image_url = data.photo;
        // console.log(name, category, image_url)
        const medicineAdd = { name, category, image_url }
        const { data: addMedi } = await axiosSecure.post('/allMedicine', medicineAdd)
        console.log(addMedi)
        if(addMedi.acknowledged){
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
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Name</label>
                                <input {...register("name", { required: true })} id="name" type="text" placeholder="name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="category" className="text-sm">category</label>
                                <input {...register("category", { required: true })} id="category" type="text" placeholder="category" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="photo" className="text-sm">photo</label>
                                <input {...register("photo", { required: true })} id="photo" type="text" placeholder="photo URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
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