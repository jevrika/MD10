export const nameValidate = (name: string) => {
  if (name.match(/^[A-Ža-ž]{2,50}$/)) {
    return true;
  }
  return false;
};
