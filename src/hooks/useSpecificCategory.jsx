import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useSpecificCategory = (category) => {
    const axiosPublic = useAxiosPublic()
    const { data: specificCategory } = useQuery({
        queryKey: ['categoryData', category],
        enabled: !!category,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/specific/${category}`)
            return data;
        }
    })
    return [specificCategory]
};

export default useSpecificCategory;