import { SIGNIN_LINK, USERS_LINK, WORDS_LINK } from '../constants/apiLinks';
import { saveUserData } from './storage';

export const getWords = async (group, page) => {
  const response = await fetch(`${WORDS_LINK}?group=${group ? group : 0}&page=${page ? page : 0}`);
  const result = await response.json();
  return result.map((el) => {
    el.selected = false;
    return el;
  });
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

  saveUserData(content);
  return content;
};

export const getUserWords = async (id, token) => {
  const response = await fetch(`${USERS_LINK}/${id}/words`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  const userWords = await Promise.all(result.map((el) => getWordById(el.wordId)));

  return userWords;
};

export const createUserWords = async (word, userId, wordId, token) => {
  const response = await fetch(`${USERS_LINK}/${userId}/words/${wordId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      difficulty: 'hard',
      optional: word,
    }),
  });
  return await response.json();
};

export const getWordById = async (wordId, token) => {
  const response = await fetch(`${WORDS_LINK}/${wordId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

export const getAggregatedWords = async (id, token) => {
  const response = await fetch(`${USERS_LINK}/${id}/aggregatedWords`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  const { paginatedResults } = result[0];
  return paginatedResults;
};

export const deleteUserWord = async (id, wordId, token) => {
  const response = await fetch(`${USERS_LINK}/${id}/words/${wordId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};
