import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: allUsers, isLoading , refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/allUsers')
            return data;
        }
    })
    return [allUsers, isLoading , refetch]
};

export default useUsers;