import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';
import IntersectionObserverMock from './__mocks__/intersectionObserverMock';

jest.setMock('node-fetch', fetchMock);
fetchMock.enableMocks();

global.IntersectionObserver = IntersectionObserverMock;
