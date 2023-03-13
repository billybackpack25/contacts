export const camelToReadableLowercase = (text: string) =>
  text.replace(/([a-z])([A-Z])/g, `$1 $2`).toLowerCase();

export const capitaliseFirstLetter = (word: string) =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
