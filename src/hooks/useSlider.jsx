import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useSlider = () => {
    const axiosPublic = useAxiosPublic()
    const { data: image, refetch } = useQuery({
        queryKey: ['image'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/banner')
            return data;
        }
    })
    return [image, refetch]
};

export default useSlider;