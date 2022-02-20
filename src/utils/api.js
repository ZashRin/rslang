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

export const createUserWords = async (word, userId, wordId, token, value) => {
  const response = await fetch(`${USERS_LINK}/${userId}/words/${wordId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      difficulty: `${value}`,
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

export const getAggregatedWords = async (id, token, value) => {
  const response = await fetch(
    `${USERS_LINK}/${id}/aggregatedWords?wordsPerPage=20&filter=%7B%22%24and%22%3A%5B%7B%22userWord.difficulty%22%3A%22${value}%22%7D%5D%7D`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();

  return result;
};

export const deleteUserWord = async (id, wordId, token) => {
  const response = await fetch(`${USERS_LINK}/${id}/words/${wordId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getUserStat = async (id, token) => {
  const response = await fetch(`${USERS_LINK}/${id}/statistics`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};

export const updateUserStat = async (id, token, wordCount) => {
  const response = await fetch(`${USERS_LINK}/${id}/statistics`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ learnedWords: wordCount }),
  });
  const result = await response.json();
  return result;
};

export const getUserSettings = async (id, token) => {
  const response = await fetch(`${USERS_LINK}/${id}/settings`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};

export const updateUserSettings = async (id, token, wordCount) => {
  const response = await fetch(`${USERS_LINK}/${id}/settings`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ wordsPerDay: wordCount }),
  });
  const result = await response.json();
  return result;
};

export const updateUser = async (id, token, data) => {
  const response = await fetch(`${USERS_LINK}/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};
