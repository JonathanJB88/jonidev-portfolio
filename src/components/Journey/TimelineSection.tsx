import { useContext, useState } from 'react';
import Link from 'next/link';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { Slide } from 'react-awesome-reveal';
import 'react-vertical-timeline-component/style.min.css';

import { PortfolioContext } from '@/context';
import { Button, TimelineItem } from '@/components';

import { IJourney } from '@/interfaces';

interface TimelineSectionProps {
  journey: IJourney[];
}

const getButtonClass = (isSelected: boolean, darkMode: boolean) => {
  const baseClass = 'px-3 py-1 mx-1 rounded-lg font-body font-bold';
  const selectedClass = darkMode
    ? 'bg-accent text-primary hover:bg-primary hover:text-white'
    : 'bg-primary text-white hover:bg-accent-hover hover:text-primary';
  const unselectedClass = 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800';

  return isSelected ? `${baseClass} ${selectedClass}` : `${baseClass} ${unselectedClass}`;
};

export const TimelineSection = ({ journey }: TimelineSectionProps) => {
  const [showEducation, setShowEducation] = useState<boolean>(false);
  const { theme } = useContext(PortfolioContext);
  const isDark = theme === 'dark';
  const textBg = isDark ? 'text-accent' : 'text-primary';
  const lineColor = isDark ? '#4B5563' : '#EDF2F7';

  const educationBtnClass = getButtonClass(showEducation, isDark);
  const experienceBtnClass = getButtonClass(!showEducation, isDark);

  const filteredJourneyList = journey.filter((journey) =>
    showEducation ? journey.category === 'education' : journey.category === 'experience'
  );

  return (
    <>
      <section className='container mx-auto'>
        <div className='relative py-10'>
          <div className='absolute right-0 hidden top-14 md:block md:mr-4'>
            <Link href='/blog'>
              <Button label='Visit my Blog' />
            </Link>
          </div>
        </div>
      </section>
      <section className='pb-5'>
        <Slide direction='down' triggerOnce>
          <h1 className={`mb-6 text-xl font-extrabold text-center font-header md:text-4xl ${textBg}`}>My Journey</h1>
          <div className='flex justify-center mb-10'>
            <button className={experienceBtnClass} onClick={() => setShowEducation(false)}>
              Experience
            </button>
            <button data-testid='education-button' className={educationBtnClass} onClick={() => setShowEducation(true)}>
              Education
            </button>
          </div>
        </Slide>
        <VerticalTimeline animate lineColor={lineColor} layout='2-columns'>
          {filteredJourneyList.map((journey, index) => (
            <TimelineItem key={index} journey={journey} />
          ))}
        </VerticalTimeline>
      </section>
      <section className='py-10 md:hidden'>
        <div className='flex justify-center'>
          <Link href='/blog'>
            <Button label='Visit my Blog' />
          </Link>
        </div>
      </section>
    </>
  );
};

export default TimelineSection;
