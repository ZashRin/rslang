import React, { useContext } from 'react';
import { BASE_LINK } from '../../constants/apiLinks';
import './wordCard.css';
import { playAudio } from '../../utils/audio';
import { Context } from '../../Context/Context';
import { createUserWords } from '../../utils/api';

export function WordCard(obj) {
  // eslint-disable-next-line no-unused-vars
  const [context, setContext] = useContext(Context);

  const {
    word,
    wordTranslate,
    transcription,
    textMeaningTranslate,
    textMeaning,
    textExampleTranslate,
    textExample,
    image,
    audio,
    audioMeaning,
    audioExample,
    color,
  } = obj;
  return (
    <div className="word-card-container" style={{ backgroundColor: `rgba(${color})` }}>
      <div className="word-card-content-left">
        <div className="word-card-img" style={{ backgroundImage: `url(${BASE_LINK}/${image})` }}></div>
      </div>
      <button
        onClick={() => {
          createUserWords(obj, context.id, obj.id, context.token);
        }}
      ></button>
      <div className="word-card-content-right">
        <div className="word-card__header">
          <div className="word-card__audio" onClick={() => playAudio(audio, audioMeaning, audioExample)}>
            <i className="fa-solid fa-circle-play"></i>
          </div>
          <div className="word-card-word">
            {word}- {transcription} - {wordTranslate}
          </div>
        </div>
        <div className="word-card-meaning">
          <p
            className="word-card_text-meaning-en wordcard-text"
            dangerouslySetInnerHTML={{ __html: `${textMeaning}` }}
          ></p>
          <p className="word-card_text-meaning-ru wordcard-text">{textMeaningTranslate}</p>
        </div>
        <div className="word-card-example">
          <p
            className="word-card_text-example-en wordcard-text"
            dangerouslySetInnerHTML={{ __html: `${textExample}` }}
          ></p>
          <p className="word-card_text-example-ru wordcard-text">{textExampleTranslate}</p>
        </div>
      </div>
    </div>
  );
}
