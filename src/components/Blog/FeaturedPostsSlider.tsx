import 'swiper/swiper-bundle.min.css';
import Link from 'next/link';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SliderCard from '@/components/Blog/SliderCard';

import { Post } from '@/interfaces';

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

export interface FeaturedPostSliderProps {
  posts: Post[];
}

export const FeaturedPostsSlider = ({ posts }: FeaturedPostSliderProps) => (
  <div className='relative'>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 5000 }}
      className='w-full h-[400px] overflow-hidden'
    >
      {posts.map((post) => (
        <SwiperSlide key={post._id}>
          <Link href={`/blog/${post.slug}`}>
            <SliderCard post={post} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
