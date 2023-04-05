import { NextPage } from 'next';

import { HeadComponent, Loading, TimelineSection } from '@/components';
import { withPageStaticProps } from '@/utils';

import { MyPageProps } from '@/interfaces';

const JourneyPage: NextPage<MyPageProps> = ({ data: { journey } }) => (
  <>
    <HeadComponent
      title='Journey'
      description="Jonathan Bracho's professional journey as a frontend developer, including education and work experiences."
      keywords='journey, frontend developer, education, work experience, career path'
      pageUrl='/journey'
    />
    <main>{!journey || journey.length === 0 ? <Loading /> : <TimelineSection journey={journey ?? []} />}</main>
  </>
);

export const getStaticProps = withPageStaticProps('/api/data');

export default JourneyPage;
