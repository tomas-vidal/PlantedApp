export function timestampToDate({ seconds, nanoseconds }) {
  const milliseconds = seconds * 1000 + nanoseconds / 1000000;
  return new Date(milliseconds);
}

export function onlyLetters(input) {
  const lettersAllowed = /^[a-zA-Z ]*$/;
  return lettersAllowed.test(input);
}
