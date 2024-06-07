import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useMyAdvertise = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: myAdds, refetch } = useQuery({
        queryKey: ['myadds', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/myAdvertise/${user?.email}`)
            return data;
        }
    })
    return [myAdds, refetch]
};

export default useMyAdvertise;