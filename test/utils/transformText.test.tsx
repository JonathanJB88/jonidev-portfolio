import { transformText } from '@/utils';

describe('Text Transformation and Truncation', () => {
  it('should transform text correctly', () => {
    const text = 'react-native';
    const maxLength = 20;
    const transformedText = transformText(text, maxLength);
    expect(transformedText).toBe('React native');
  });

  it('should truncate text correctly', () => {
    const text = 'react-native';
    const maxLength = 5;
    const transformedText = transformText(text, maxLength);
    expect(transformedText).toBe('React...');
  });

  it('should not truncate text if it is shorter than maxLength', () => {
    const text = 'react-native';
    const maxLength = 20;
    const transformedText = transformText(text, maxLength);
    expect(transformedText).toBe('React native');
  });

  it('should handle empty text', () => {
    const text = '';
    const maxLength = 20;
    const transformedText = transformText(text, maxLength);
    expect(transformedText).toBe('');
  });

  it('should handle text with no hyphens', () => {
    const text = 'react';
    const maxLength = 20;
    const transformedText = transformText(text, maxLength);
    expect(transformedText).toBe('React');
  });

  it('should handle text with multiple hyphens', () => {
    const text = 'react-native-library';
    const maxLength = 30;
    const transformedText = transformText(text, maxLength);
    expect(transformedText).toBe('React native library');
  });
});
