import { SIGNIN_LINK, USERS_LINK, WORDS_LINK } from '../constants/apiLinks';
import { saveUserData } from './storage';

export const getWords = async (group, page) => {
  const response = await fetch(`${WORDS_LINK}?group=${group ? group : 0}&page=${page ? page : 0}`);
  return await response.json();
};

export const createUser = async (user) => {
  const rawResponse = await fetch(USERS_LINK, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const content = await rawResponse.json();

  console.log(content);

  return loginUser(user);
};

export const loginUser = async (user) => {
  const rawResponse = await fetch(SIGNIN_LINK, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const content = await rawResponse.json();

  console.log(content);
  saveUserData(content);
  return content;
};
