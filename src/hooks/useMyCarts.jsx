import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useMyCarts = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data: myCarts = [] } = useQuery({
        queryKey: [user?.email, 'myCarts'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/myCarts/${user?.email}`)
            return res.data;
        }
    })
    return [myCarts]
};

export default useMyCarts;