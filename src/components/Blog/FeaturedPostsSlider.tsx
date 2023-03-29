import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderCard } from '@/components';

import { Post } from '@/interfaces';

// Install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

interface FeaturedPostSliderProps {
  posts: Post[];
}

export const FeaturedPostSlider = ({ posts }: FeaturedPostSliderProps) => {
  return (
    <div className='relative'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className='w-full h-[400px] overflow-hidden'
      >
        {posts.map((post) => (
          <SwiperSlide key={post._id}>
            <SliderCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};