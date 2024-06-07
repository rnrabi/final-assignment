import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useBannerAdvertise = () => {
    const axiosSecure = useAxiosSecure()
    const { data: allBanner } = useQuery({
        queryKey: ['allBanner'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/myAdvertise')
            return data;
        }
    })
    return [allBanner]
};

export default useBannerAdvertise;