import React, { useState } from 'react';
import { Context } from '../Context/Context.js';
import { Header } from './Header/Header.js';
import { WordPage } from './WordPage/WordPage';
import { PAGE_NAMES } from '../constants/constants.js';
import { StartPage } from './StartPage/StartPage.js';
import { Footer } from './Footer/Footer';

export default function App() {
  const initialState = { currentPage: PAGE_NAMES.MAIN.name };
  const [context, setContext] = useState(initialState);
  return (
    <Context.Provider value={[context, setContext]}>
      <Header />
      {context.currentPage === PAGE_NAMES.MAIN.name && <StartPage />}
      {(context.currentPage === PAGE_NAMES.WORKBOOK.name && <WordPage />) ||
        (context.currentPage === PAGE_NAMES.DICTIONARY.name && <WordPage />)}
      <Footer />
    </Context.Provider>
  );
}
