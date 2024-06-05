import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUpdateCategory = (id) => {
    const axiosSecure = useAxiosSecure()
    const { data: updateCategory } = useQuery({
        queryKey: ['update', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/allMedicine/${id}`)
            return data;
        }
    })
    return [updateCategory]
};

export default useUpdateCategory;