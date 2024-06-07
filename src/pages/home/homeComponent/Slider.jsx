
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Slider = () => {
    const axiosPublic = useAxiosPublic()
    const { data: image } = useQuery({
        queryKey: ['image'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/allImage')
            return data;
        }
    })
    console.log(image)
    
    const slidesPerView = 1;
    const slidesPerGroup = 1;
    const enableLoop = image?.length >= (slidesPerView + slidesPerGroup);

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                loop={enableLoop}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper z-0"
            >
                {
                    image?.map((img, idx) => <SwiperSlide key={idx}> <img className='h-[500px] w-full' src={img} alt="" /> </SwiperSlide>)
                }

            </Swiper>
        </>
    );
};

export default Slider;