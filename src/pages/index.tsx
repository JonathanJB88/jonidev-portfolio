import { NextPage } from 'next';

import { HeadComponent, Intro, Loading } from '@/components';
import { withPageStaticProps } from '@/utils';

import { MyPageProps } from '@/interfaces';

const HomePage: NextPage<MyPageProps> = ({ data: { about } }) => (
  <>
    <HeadComponent title='Portfolio' />
    <main>{!about ? <Loading /> : <Intro about={about} />}</main>
  </>
);

export const getStaticProps = withPageStaticProps('/api/data');

export default HomePage;
