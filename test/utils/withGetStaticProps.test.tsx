import { getData } from '../../src/utils/getData';
import { withPageStaticProps } from '@/utils';
import { DataResponse } from '@/interfaces';

jest.mock('../../src/utils/getData', () => ({
  getData: jest.fn(),
}));

describe('withPageStaticProps', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_API_URL = 'https://api.example.com';
  });

  it('should fetch data and return static props with data', async () => {
    const mockData: DataResponse = { about: 'About me' };
    (getData as jest.MockedFunction<typeof getData>).mockResolvedValue(mockData);

    const endpoint = '/about';
    const getStaticProps = withPageStaticProps(endpoint);

    const result = await getStaticProps({});

    expect(getData).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`);
    expect(result).toEqual({
      props: { data: mockData },
      revalidate: 1,
    });
  });

  it('should handle errors and return static props with empty data', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    (getData as jest.MockedFunction<typeof getData>).mockRejectedValue(new Error('Fetching error'));

    const endpoint = '/about';
    const getStaticProps = withPageStaticProps(endpoint);

    const result = await getStaticProps({});

    expect(getData).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching data:', new Error('Fetching error'));
    expect(result).toEqual({
      props: { data: {} as DataResponse },
      revalidate: 1,
    });

    consoleErrorSpy.mockRestore();
  });
});
