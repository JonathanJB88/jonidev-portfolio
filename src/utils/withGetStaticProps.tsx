import { GetStaticProps, GetStaticPropsContext } from 'next';
import { DataResponse, MyPageProps } from '@/interfaces';
import { getData } from '@/utils';

export const withPageStaticProps =
  (endpoint: string): GetStaticProps<MyPageProps> =>
  async (_context: GetStaticPropsContext) => {
    try {
      const data = await getData(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`);
      return {
        props: { data },
        revalidate: 1,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: { data: {} as DataResponse },
        revalidate: 1,
      };
    }
  };
