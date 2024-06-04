import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useUsers = () => {
    const axiosPublic = useAxiosPublic()
    const { data: allUsers, isLoading , refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/allUsers')
            return data;
        }
    })
    return [allUsers, isLoading , refetch]
};

export default useUsers;