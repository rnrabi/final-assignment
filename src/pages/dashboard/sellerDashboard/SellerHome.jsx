import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";


const SellerHome = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data: sellerHome } = useQuery({
        queryKey: ['sellerHome'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/bookingProducts')
            return data;
        }
    })
    const { data: sellerCart } = useQuery({
        queryKey: ['sellercart'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/seller/${user?.email}`)
            return data;
        }
    })
    console.log(sellerHome)
    const uniqueSeller = sellerHome?.filter(seller => seller.email == user?.email)
    console.log(uniqueSeller)
    const totalPaid = uniqueSeller?.reduce((sum, items) => sum + parseFloat(items.price), 0)
    const pendingTotal = sellerCart?.reduce((sum, items) => sum + parseFloat(items.price), 0)


    return (
        <div>
            <Helmet>
                <title>Dashboard | SellerHome</title>
            </Helmet>
            <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">

                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">

                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">{uniqueSeller?.length}</p>
                            <p className="capitalize">Total Sells</p>
                        </div>
                    </div>

                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">

                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">$ {totalPaid}</p>
                            <p className="capitalize">Paid Total</p>
                        </div>
                    </div>

                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">

                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">$ {pendingTotal}</p>
                            <p className="capitalize">Pending Total</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default SellerHome;