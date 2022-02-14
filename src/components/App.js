import React, { useState } from 'react';
import { Context } from '../Context/Context.js';
import { LoginForm } from './LoginForm/LoginForm.js';
import { WordPage } from './WordPage/WordPage.js';

export default function App() {
  const [context, setContext] = useState({});
  return (
    <Context.Provider value={[context, setContext]}>
      <LoginForm />
      <WordPage />
    </Context.Provider>
  );
}
