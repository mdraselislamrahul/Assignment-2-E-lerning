import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CustomerBanner1 from './CustomerBanner/CustomerBanner1';
import CustomerBanner2 from './CustomerBanner/CustomerBanner2';
import CustomerBanner3 from './CustomerBanner/CustomerBanner3';
const HappyCoustomer = () => {
    return (
        <div className='px-5 mt-20'>
            <div className='text-center'>
                <h4 className='text-xl italic font-bold text-red-900'>Happy Customers</h4>
                <h1 className='mt-3 text-4xl font-bold'>Our Guestbook</h1>
            </div>

            <div className='mx-10'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><CustomerBanner1></CustomerBanner1></SwiperSlide>
        <SwiperSlide><CustomerBanner2></CustomerBanner2></SwiperSlide>
        <SwiperSlide><CustomerBanner3></CustomerBanner3></SwiperSlide>
        <SwiperSlide><CustomerBanner1></CustomerBanner1></SwiperSlide>
        <SwiperSlide><CustomerBanner2></CustomerBanner2></SwiperSlide>
        <SwiperSlide><CustomerBanner3></CustomerBanner3></SwiperSlide>
        <SwiperSlide><CustomerBanner1></CustomerBanner1></SwiperSlide>
        <SwiperSlide><CustomerBanner2></CustomerBanner2></SwiperSlide>
        <SwiperSlide><CustomerBanner3></CustomerBanner3></SwiperSlide>
      </Swiper>
            </div>
            
        </div>
    );
};

export default HappyCoustomer;