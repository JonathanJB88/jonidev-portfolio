import { NextPage } from 'next';

import { HeadComponent, Loading, TimelineSection } from '@/components';
import { withPageStaticProps } from '@/utils';

import { MyPageProps } from '@/interfaces';

const JourneyPage: NextPage<MyPageProps> = ({ data: { journey } }) => (
  <>
    <HeadComponent title='Journey' />
    <main>{!journey || journey.length === 0 ? <Loading /> : <TimelineSection journey={journey ?? []} />}</main>
  </>
);

export const getStaticProps = withPageStaticProps('/api/data');

export default JourneyPage;
