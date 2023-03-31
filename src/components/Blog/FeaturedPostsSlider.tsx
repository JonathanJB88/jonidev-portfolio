import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderCard } from '@/components';

import { Post } from '@/interfaces';
import Link from 'next/link';

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

interface FeaturedPostSliderProps {
  posts: Post[];
}

export const FeaturedPostsSlider = ({ posts }: FeaturedPostSliderProps) => {
  return (
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
};
