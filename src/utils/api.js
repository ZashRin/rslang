import { SIGNIN_LINK, USERS_LINK, WORDS_LINK } from '../constants/apiLinks';
// import { compareObj } from './generalUtils';
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

  console.log(content);
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
  console.log(userWords);
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
  console.log(paginatedResults);
  return paginatedResults;
};
// compareObj(
//   getWords(0, 0),
//   getAggregatedWords(
//     '620a478ad64f070016d1f652',
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGE0NzhhZDY0ZjA3MDAxNmQxZjY1MiIsImlhdCI6MTY0NDk2MzMwMCwiZXhwIjoxNjQ0OTc3NzAwfQ.gR-BEoOHLFEb10samtBA3x3LMj4iwjUdX6o9_ip2QEY'
//   )
// );

// const newA = Array.map((el) => getWordId(el.wordId));
