
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner1 from './AllBanners/Banner1';
import Banner2 from './AllBanners/Banner2';
import Banner3 from './AllBanners/Banner3';
const Banner = () => {
        
    return (
        <div className='mt-'>
           <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Banner1></Banner1></SwiperSlide>
        <SwiperSlide><Banner2></Banner2></SwiperSlide>
        <SwiperSlide><Banner3></Banner3></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;