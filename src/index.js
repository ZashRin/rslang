import React from 'react';
import ReactDOM from 'react-dom';
import { WordPage } from './components/WordPage/WordPage';
import './fonts.css';
import './default.css';

ReactDOM.render(
  <React.StrictMode>
    <WordPage />
  </React.StrictMode>,
  document.getElementById('root')
);
