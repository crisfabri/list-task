export const getclasses = (classes) =>
  classes
    .filter((item) => item !== '')
    .join(' ')
    .trim();
