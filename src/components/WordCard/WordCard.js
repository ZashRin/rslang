import React from 'react';
import { BASE_LINK } from '../../constants/apiLinks';
import './wordCard.css';

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
    color,
  } = obj;
  return (
    <div className="WordCard-container" style={{ backgroundColor: `rgba(${color})` }}>
      <div className="WordCard-content-left">
        <div className="WordCard-img" style={{ backgroundImage: `url(${BASE_LINK}/${image})` }}></div>
      </div>
      <div className="WordCard-content-right">
        <div className="WordCard-word">
          {word}- {transcription} - {wordTranslate}
        </div>
        <div className="WordCard-meaning">
          <p
            className="WordCard_text-meaning-en wordcard-text"
            dangerouslySetInnerHTML={{ __html: `${textMeaning}` }}
          ></p>
          <p className="WordCard_text-meaning-ru wordcard-text">{textMeaningTranslate}</p>
        </div>
        <div className="WordCard-example">
          <p
            className="WordCard_text-example-en wordcard-text"
            dangerouslySetInnerHTML={{ __html: `${textExample}` }}
          ></p>
          <p className="WordCard_text-example-ru wordcard-text">{textExampleTranslate}</p>
        </div>
      </div>
    </div>
  );
}
