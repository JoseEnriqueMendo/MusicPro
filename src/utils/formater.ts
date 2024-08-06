export const textToURL = (text: string) => {
  const encodedText = encodeURIComponent(text);

  const textWithPlus = encodedText.replace(/%20/g, '+');

  return textWithPlus;
};
