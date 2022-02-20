import React, { useContext } from 'react';
import { BASE_LINK } from '../../constants/apiLinks';
import './wordCard.css';
import { playAudio } from '../../utils/audio';
import { Context } from '../../Context/Context';
import { createUserWords, deleteUserWord } from '../../utils/api';
import { checkWordIsHard } from '../../utils/generalUtils';

export function WordCard({ wordObject, color, hard }) {
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
  } = wordObject;
  const valueAuthorization = context.authenticated;
  const handleCardClick = () => {
    if (!checkWordIsHard(context.userWords, wordObject.id)) {
      createUserWords(wordObject, context.id, wordObject.id, context.token);
      setContext({ ...context, userWords: [...context.userWords, { ...wordObject }] });
    } else {
      deleteUserWord(context.id, wordObject.id, context.token);
      const index = context.userWords.findIndex((el) => el.id === wordObject.id);
      const array = [...context.userWords];
      array.splice(index, 1);
      setContext({ ...context, userWords: array });
    }
  };
  const isHardFilter = {
    backgroundColor: 'rgb(246 255 19 / 40%)',
    filter: 'saturate(90%)',
    boxShadow:
      'rgb(229 226 0) 0px 0px 5px 6px, rgb(0 0 0 / 30%) 0px 5px 3px 3px, rgb(0 0 0 / 25%) 0px 4px 6px 1px, rgb(0 0 0 / 20%) 0px 2px 8px 2px, rgb(0 0 0 / 15%) 0px 4px 16px 4px',
  };
  return (
    <div
      className="word-card-container"
      style={
        valueAuthorization
          ? checkWordIsHard(context.userWords, wordObject.id)
            ? isHardFilter
            : { backgroundColor: `rgba(${color})` }
          : { backgroundColor: `rgba(${color})` }
      }
    >
      <div className="word-card-content-left">
        <div className="word-card-img" style={{ backgroundImage: `url(${BASE_LINK}/${image})` }}></div>
      </div>
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
        {context.authenticated ? <button onClick={handleCardClick}>Сложное слово</button> : <></>}
      </div>
    </div>
  );
}
