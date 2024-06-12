import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useCustomerDetails = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data: sellers , isLoading} = useQuery({
        queryKey: [user?.email, 'bookingSeller'],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosPublic.get(`/bookingSeller/${user?.email}`)
            return res.data;
        }
    })
    return [sellers , isLoading]
};

export default useCustomerDetails;