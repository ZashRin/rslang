/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Context } from '../Context/Context.js';
import { Header } from './Header/Header.js';
import { WordPage } from './WordPage/WordPage';
import { PAGE_NAMES } from '../constants/constants.js';
import { StartPage } from './StartPage/StartPage.js';
import { Footer } from './Footer/Footer';
import { getAuth, getName, getToken, getUserId } from '../utils/storage.js';
import { AudioGame } from './AudioGame/AudioGame.js';

export default function App() {
  const id = getUserId();
  const token = getToken();
  const name = getName();
  const auth = getAuth();
  const initialState = { id: id, token: token, name: name, authenticated: auth, currentPage: PAGE_NAMES.MAIN.name };
  const [context, setContext] = useState(initialState);

  return (
    <Context.Provider value={[context, setContext]}>
      <Header />
      {context.currentPage === PAGE_NAMES.MAIN.name && <StartPage />}
      {(context.currentPage === PAGE_NAMES.WORKBOOK.name && <WordPage />) ||
        (context.currentPage === PAGE_NAMES.DICTIONARY.name && <WordPage />)}
      {context.currentPage === PAGE_NAMES.GAME.name && <AudioGame />}
      {!(context.currentPage === PAGE_NAMES.GAME.name) && <Footer />}
    </Context.Provider>
  );
}
