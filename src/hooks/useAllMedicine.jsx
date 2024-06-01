import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllMedicine = () => {
    const axiosPublic = useAxiosPublic()
    const { data: allMedicine = [] } = useQuery({
        queryKey: ['allMedicine'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allMedicine')
            return res.data;
        }
    })
    return [allMedicine]

}
export default useAllMedicine;