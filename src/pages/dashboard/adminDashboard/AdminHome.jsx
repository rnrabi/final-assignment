import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";


const AdminHome = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: adHome } = useQuery({
        queryKey: [user?.email, 'myCarts'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking`)
            return res.data;
        }
    })
    const { data: allCarts } = useQuery({
        queryKey: [user?.email, 'allCarts'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts`)
            return res.data;
        }
    })

    // console.log(adHome)
    // console.log(allCarts)
    const totalSales = adHome?.reduce((sum, sel) => sum + sel.products?.length, 0) ?? 0;
    const priceInTotal = adHome?.reduce((sum, item) => sum + parseFloat(parseFloat(item.totalPrice).toFixed(2)), 0) ?? 0;
    const pendingTotal = allCarts?.reduce((sum, items) => sum + parseFloat(items.price), 0) ?? 0;
    console.log(pendingTotal)

    return (
        <div>
            <Helmet>
                <title>Dashboard | Home</title>
            </Helmet>
            <section>
                <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
                    <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">

                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">

                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">{totalSales}</p>
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
                                <p className="text-3xl font-semibold leading-none">${pendingTotal}</p>
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