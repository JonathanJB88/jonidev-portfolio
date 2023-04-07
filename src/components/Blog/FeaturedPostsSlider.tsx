import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';

import SliderCard from '@/components/Blog/SliderCard';

import { Post } from '@/interfaces';

export interface FeaturedPostSliderProps {
  posts: Post[];
}

export const FeaturedPostsSlider = ({ posts }: FeaturedPostSliderProps) => (
  <div className='relative w-full h-[400px] overflow-hidden' data-testid='carousel'>
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators
      autoPlay
      interval={5000}
      infiniteLoop
      useKeyboardArrows
      swipeable
      emulateTouch
      showArrows={false}
      stopOnHover
      dynamicHeight
    >
      {posts.map((post) => (
        <div key={post._id} data-testid='slider-card'>
          <Link href={`/blog/${post.slug}`}>
            <SliderCard post={post} />
          </Link>
        </div>
      ))}
    </Carousel>
  </div>
);
