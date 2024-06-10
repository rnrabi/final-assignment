import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const AdminHome = () => {

    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data: adHome } = useQuery({
        queryKey: [user?.email, 'myCarts'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/booking`)
            return res.data;
        }
    })
    console.log(adHome)
    const priceInTotal = adHome.reduce((sum, item) => sum + item.totalPrice, 0)
    console.log(priceInTotal)

    return (
        <div>
            <section>
                <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
                    <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">

                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">

                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">$ TODO</p>
                                <p className="capitalize">Total Sells</p>
                            </div>
                        </div>

                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">

                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">$ {priceInTotal}</p>
                                <p className="capitalize">Paid Total</p>
                            </div>
                        </div>

                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">

                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">$ 7500</p>
                                <p className="capitalize">Pending Total</p>
                            </div>
                        </div>

                    </div>
                </section>
            </section>
        </div>
    );
};

export default AdminHome;