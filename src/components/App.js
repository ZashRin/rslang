import React, { useState } from 'react';
import { Context } from '../Context/Context.js';
import { Header } from './Header/Header.js';
import { WordPage } from './WordPage/WordPage';
import { AppDescription } from './AppDescription/AppDescription';
import { PAGE_NAMES } from '../constants/constants.js';
import { LoginForm } from './LoginForm/LoginForm.js';

export default function App() {
  const initialState = { currentPage: PAGE_NAMES.MAIN.name };
  const [context, setContext] = useState(initialState);
  console.log(context.currentPage);
  return (
    <Context.Provider value={[context, setContext]}>
      <Header />
      <LoginForm />
      {context.currentPage === PAGE_NAMES.MAIN.name && <AppDescription />}
      {(context.currentPage === PAGE_NAMES.WORKBOOK.name && <WordPage />) ||
        (context.currentPage === PAGE_NAMES.DICTIONARY.name && <WordPage />)}
    </Context.Provider>
  );
}
