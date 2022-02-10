import React from 'react';
import { BASE_LINK } from '../../constants/apiLinks';
import './styles.css';

export function WordCard(obj) {
  const {
    word,
    wordTranslate,
    transcription,
    textMeaningTranslate,
    textMeaning,
    textExampleTranslate,
    textExample,
    image,
  } = obj;
  return (
    <div className="WordCard-container" style={{ backgroundImage: `url(${BASE_LINK}/${image})` }}>
      <div className="WordCard-content">
        <div className="WordCard_word">{word}</div>
        <div className="WordCard_word-translate">{wordTranslate}</div>
        <div className="WordCard_word-transcription">`{transcription}`</div>
        <button onClick={null}></button>
      </div>
      <div className="WordCard-info-eng">
        <div className="WordCard_text-meaning">`{textMeaning}`</div>
        <div className="WordCard_text-example">`{textExample}`</div>
      </div>
      <div className="WordCard-info-ru">
        <div className="WordCard_text-meaning-ru">`{textMeaningTranslate}`</div>
        <div className="WordCard_text-example-ru">`{textExampleTranslate}`</div>
      </div>
    </div>
  );
}
