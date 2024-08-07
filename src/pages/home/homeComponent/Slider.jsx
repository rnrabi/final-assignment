
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useSlider from '../../../hooks/useSlider';

const Slider = () => {
    const [image] = useSlider()
    //console.log(image)

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
                    image?.map((img, idx) => <SwiperSlide key={idx}> <img className='h-[500px] w-full' src={img.image} alt="" /> </SwiperSlide>)
                }

            </Swiper>
        </>
    );
};

export default Slider;