export const transformText = (text: string, maxLength: number) => {
  const words = text.split('-');
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

  const transformedText = words.join(' ');

  return transformedText.length > maxLength ? transformedText.slice(0, maxLength) + '...' : transformedText;
};
