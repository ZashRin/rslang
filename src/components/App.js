import React, { useState } from 'react';
import { Context } from '../Context/Context.js';
import { Header } from './Header/Header.js';
import { WordPage } from './WordPage/WordPage';
import { AppDescription } from './AppDescription/AppDescription';
import { PAGE_NAMES } from '../constants/constants.js';

export default function App() {
  const initialState = { currentPage: PAGE_NAMES.MAIN.name };
  const [context, setContext] = useState(initialState);

  return (
    <Context.Provider value={[context, setContext]}>
      <Header />
      {context.currentPage === PAGE_NAMES.MAIN.name && <AppDescription />}
      {context.currentPage === PAGE_NAMES.WORKBOOK.name && <WordPage />}
    </Context.Provider>
  );
}
