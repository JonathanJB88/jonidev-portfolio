import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';

jest.setMock('node-fetch', fetchMock);
fetchMock.enableMocks();
