import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useMyCarts = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: myCarts = [], refetch } = useQuery({
        queryKey: [user?.email, 'myCarts'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myCarts/${user?.email}`)
            return res.data;
        }
    })
    return [myCarts, refetch]
};

export default useMyCarts;