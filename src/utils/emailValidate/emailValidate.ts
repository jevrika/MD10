export const emailValidate = (email: string) => {
  if (email.match(/^[a-zA-Z0-9-_.']{3,20}@[a-z]{3,10}\.[a-z]{2,4}/)) {
    return true;
  }
  return false;
};
