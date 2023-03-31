import { useContext } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { PortfolioContext } from '@/context';
import { IJourney } from '@/interfaces';

interface TimelineItemProps {
  journey: IJourney;
}

export const TimelineItem = ({ journey: { year, title, description, category } }: TimelineItemProps) => {
  //
  const { theme } = useContext(PortfolioContext);
  const isDark = theme === 'dark';
  const borderRight = isDark ? '7px solid #4B5563' : '7px solid #EDF2F7';
  const icon = category === 'education' ? '🎓' : '👨‍💻';
  const iconStyle = {
    background: isDark ? '#FF8A3D' : '#3358C4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
  };
  const contentStyle = {
    background: isDark ? '#4B5563' : '#EDF2F7',
    color: isDark ? '#F0F0F0' : '#121212',
    borderRadius: '10px',
    fontSize: '16px',
  };

  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      contentStyle={contentStyle}
      contentArrowStyle={{ borderRight }}
      date={year}
      dateClassName='font-body text-base'
      iconStyle={iconStyle}
      icon={
        <span role='img' aria-label={icon}>
          {icon}
        </span>
      }
    >
      <h3 className='underline vertical-timeline-element-title font-header'>{title}</h3>
      <p className='text-justify font-body' style={{ fontSize: '14px' }}>
        {description}
      </p>
    </VerticalTimelineElement>
  );
};
