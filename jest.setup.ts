import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';
import IntersectionObserverMock from './__mocks__/intersectionObserverMock';

jest.mock('next/router', () => require('next-router-mock'));

jest.setMock('node-fetch', fetchMock);
fetchMock.enableMocks();

// Mock window.matchMedia
window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

global.IntersectionObserver = IntersectionObserverMock;
