import { NextApiRequest, NextApiResponse } from 'next';
import { about, techSkills, projects, services, softSkills, journey } from '@/data/data';
import handler, { Data } from '@/pages/api/data';

describe('handler', () => {
  let mockRequest: Partial<NextApiRequest>;
  let mockResponse: Partial<NextApiResponse>;
  let jsonFn: jest.Mock;

  beforeEach(() => {
    mockRequest = {};
    jsonFn = jest.fn();
    mockResponse = {
      status: jest.fn().mockReturnValue({ json: jsonFn }),
    };
  });

  it('returns the data as JSON', () => {
    handler(mockRequest as NextApiRequest, mockResponse as NextApiResponse);

    expect(mockResponse.status).toBeCalledWith(200);
    expect(jsonFn).toBeCalledWith({
      about,
      techSkills,
      projects,
      services,
      softSkills,
      journey,
    });
  });

  it('matches the data format', () => {
    const data: Data = {
      about: expect.any(String),
      techSkills: expect.any(Array),
      softSkills: expect.any(Array),
      projects: expect.any(Array),
      services: expect.any(Array),
      journey: expect.any(Array),
    };

    handler(mockRequest as NextApiRequest, mockResponse as NextApiResponse);

    expect(jsonFn).toBeCalledWith(expect.objectContaining(data));
  });
});
