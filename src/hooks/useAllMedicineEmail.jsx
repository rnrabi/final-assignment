import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useAllMedicineEmail = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const { data: sellerMedi, refetch } = useQuery({
        queryKey: ['sellerMedicine'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/allMedi/${user?.email}`)
            return data;
        }
    })
    return [sellerMedi, refetch]
};

export default useAllMedicineEmail;