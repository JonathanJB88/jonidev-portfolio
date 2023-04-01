import { DataResponse } from '@/interfaces';

export const getData = async (url: string): Promise<DataResponse> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  return await response.json();
};
