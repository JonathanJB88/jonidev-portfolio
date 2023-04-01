export const transformText = (text: string, maxLength: number) => {
  const words = text.split('-');
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  const transformedText = words.join(' ');
  return truncateText(transformedText, maxLength);
};

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};
