import { createContext } from 'react';

const context = {
  id: '',
  token: '',
  name: '',
  authenticated: false,
  currentPage: '',
  modalIsOpen: false,
  learned: 0,
  wordsPerDay: 0,
  userWords: [],
  email: '',
  password: '',
  words: [],
  wordBookPage: 0,
};

export const Context = createContext(context);
