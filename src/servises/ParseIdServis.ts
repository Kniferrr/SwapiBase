export const parseIdFromUrl = (character: string) => {
  const regex = /\/(\d+)\/$/;
  const match = regex.exec(character);
  let id = 0;
  if (match) {
    id = parseInt(match[1]);
  }
  return id;
};
