export const camelToReadableLowercase = (text: string) =>
  text.replace(/([a-z])([A-Z])/g, `$1 $2`).toLowerCase();

export const capitaliseFirstLetter = (word: string) =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

export const initials = (firstName: string, lastName: string) =>
  `${firstName[0]}${lastName[0]}`;
