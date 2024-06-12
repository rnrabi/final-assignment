import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Discount = () => {
    // const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: discount } = useQuery({
        queryKey: ['paymentHistory'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/discount`)
            return res.data;
        }
    })

    console.log(discount)
    return (
        <div>
            <h2 className="text-center text-2xl font-bold mt-10"> Our Discount Medicine</h2>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
               
                    {
                        discount?.map(dis => <SwiperSlide className="card w-96 bg-base-100 shadow-xl" key={dis._id}>
                            <figure className="px-10 pt-10">
                                <img src={dis.image} alt="Shoes" className="rounded-xl w-96 h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Discount: <span className="text-red-400">{dis.discount}</span> %</h2>
                                <p>Number of Medicine :pis</p>

                            </div>
                        </SwiperSlide>)
                    }
               

            </Swiper>






        </div>
    );
};

export default Discount;