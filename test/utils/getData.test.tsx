import { getData } from '@/utils';
import { DataResponse } from '@/interfaces';

const mockData: DataResponse = {
  about: 'Some about text',
  techSkills: [
    {
      name: 'JavaScript',
      level: '90',
    },
  ],
  softSkills: null,
  projects: null,
  services: null,
  journey: null,
};

describe('getData', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should return data for a valid URL', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const result = await getData('https://api.example.com/data');
    expect(result).toEqual(mockData);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/data');
  });

  it('should throw an error for an invalid URL', async () => {
    fetchMock.mockRejectOnce(new Error('Error fetching data: Not Found'));

    await expect(getData('https://api.example.com/invalid')).rejects.toThrow('Error fetching data: Not Found');
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/invalid');
  });

  it('should throw an error for a non-OK status response', async () => {
    fetchMock.mockResponseOnce('', { status: 500, statusText: 'Internal Server Error' });

    await expect(getData('https://api.example.com/error')).rejects.toThrow(
      'Error fetching data: Internal Server Error'
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/error');
  });
});
