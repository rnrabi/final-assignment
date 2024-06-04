import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useRoll = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const { data: roll, isLoading } = useQuery({
        queryKey: ['roll', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/users/${user?.email}`)
            return data;
        }
    })


    return { roll, isLoading }
};

export default useRoll;