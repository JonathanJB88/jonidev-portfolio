import { useContext, useState } from 'react';
import Link from 'next/link';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { PortfolioContext } from '@/context';
import { Btn, TimelineItem } from '@/components';

import { IJourney } from '@/interfaces';

interface TimelineSectionProps {
  journey: IJourney[];
}

export const TimelineSection = ({ journey }: TimelineSectionProps) => {
  //
  const [showEducation, setShowEducation] = useState<boolean>(false);
  const { theme } = useContext(PortfolioContext);
  const isDark = theme === 'dark';
  const textBg = isDark ? 'text-accent' : 'text-primary';
  const lineColor = isDark ? '#4B5563' : '#EDF2F7';

  const educationBtnClass = showEducation
    ? 'bg-primary text-white px-3 py-2 rounded-lg mr-2 font-body font-bold hover:bg-accent-hover hover:text-primary dark:bg-accent dark:text-primary dark:hover:bg-primary dark:hover:text-white'
    : 'bg-gray-200 text-gray-700 px-3 py-2 rounded-lg mr-2 font-body font-bold hover:bg-gray-300 hover:text-gray-800';
  const experienceBtnClass = !showEducation
    ? 'bg-primary text-white px-3 py-2 rounded-lg mr-2 font-body font-bold hover:bg-accent-hover hover:text-primary dark:bg-accent dark:text-primary dark:hover:bg-primary dark:hover:text-white'
    : 'bg-gray-200 text-gray-700 px-3 py-2 rounded-lg font-body font-bold hover:bg-gray-300 hover:text-gray-800';

  const filteredJourneyList = journey.filter((journey) =>
    showEducation ? journey.category === 'education' : journey.category === 'experience'
  );

  return (
    <section>
      <div className='container py-10 mx-auto'>
        <h1 className={`mb-6 text-xl font-extrabold text-center font-header md:text-4xl ${textBg}`}>My Journey</h1>
        <div className='flex justify-center mb-10'>
          <button className={educationBtnClass} onClick={() => setShowEducation(true)}>
            Education
          </button>
          <button className={experienceBtnClass} onClick={() => setShowEducation(false)}>
            Experience
          </button>
        </div>
        <VerticalTimeline animate lineColor={lineColor} layout='2-columns'>
          {filteredJourneyList.map((journey, index) => (
            <TimelineItem key={index} journey={journey} />
          ))}
        </VerticalTimeline>
      </div>
      <div className='flex justify-center py-10'>
        <Link href='/blog'>
          <Btn label='Visit my Blog' />
        </Link>
      </div>
    </section>
  );
};
