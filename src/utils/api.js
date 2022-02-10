import { WORDS_LINK } from '../constants/apiLinks';

export const getWords = async (group, page) => {
  const response = await fetch(`${WORDS_LINK}?group=${group ? group : 0}&page=${page ? page : 0}`);
  return await response.json();
};
