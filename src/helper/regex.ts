export const passwordRegex = () => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
};

export const checkAlphaNumericRegex = () => {
  return /^[A-Za-z ]*$/;
};

export const lettersAndNumbersRegex = () => {
  return /^[A-Za-z0-9_-]*$/;
};

export const checkOnlyAlphabets = () => {
  return /^[A-Za-z ]+$/;
};
