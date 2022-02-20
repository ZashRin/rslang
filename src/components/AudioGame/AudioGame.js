import React, { useCallback, useContext, useEffect, useState } from 'react';
import { getWords } from '../../utils/api';
import { GetRound } from './getRound';
import { Context } from '../../Context/Context';
import { COUNT_GAMEROUNDS } from '../../constants/constants';
import './styles.css';
import { BASE_LINK } from '../../constants/apiLinks';
import { playAudioGame } from '../../utils/audio';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function AudioGame() {
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState({});
  const [currQuest, setCurrQuest] = useState(1);
  const [context, setContext] = useContext(Context);
  const [group, setGroup] = useState();
  const getWordsCallback = useCallback(async () => {
    const fullWords = [];
    for (let i = 0; i < 30; i++) {
      fullWords.push(getWords(group, i));
    }
    const result = await Promise.all(fullWords);
    setContext({ ...context, gameWords: result.flat() });
  }, [group]);
  useEffect(() => {
    getWordsCallback();
  }, [getWordsCallback]);

  const [answers, setAnswers] = useState([]);
  function getQuestion() {
    setAnswers(GetRound(context.gameWords));
  }

  const playSound = () => {
    const { audio } = answers.find((el) => el[1])[0];
    playAudioGame(audio);
  };

  const checkAnswer = (answer, event) => {
    if (answer[1]) {
      event.target.classList.add('correct');
    } else {
      event.target.classList.add('uncorrect');
    }
    setCorrectAnswer(answers.find((el) => el[1])[0]);
    setShowCorrectAnswer(true);
  };
  const { word, wordTranslate, transcription, image, audio } = correctAnswer;

  const [gameModalIsOpen, setgameModalIsOpen] = useState(true);

  const closeModal = () => {
    setgameModalIsOpen(false);
    getQuestion();
  };

  const selectCategoryLavel = () => {
    let x = document.getElementById('mySelect').value;
    document.getElementById('demo').innerHTML = `Вы выбрали: ${x} уровень сложности.`;
    setGroup(x);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <main className="main_game">
      <Modal isOpen={gameModalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <div>
          <div>
            <h2>Настройки игры</h2>
          </div>
          <div>
            <h3>Выберите уровень сложности</h3>
            <div>
              <form>
                <p>
                  <select size="1" id="mySelect" name="lavel" onChange={selectCategoryLavel}>
                    <option defaultValue>Уровень</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </p>
                <p id="demo"></p>
                <button>Отмена</button>
                <button onClick={closeModal}>Начать игру!</button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
      {currQuest < COUNT_GAMEROUNDS ? (
        <div className="game_wrapper">
          <button onClick={playSound} className="game_Button">
            audio
          </button>
          <div className="numberQuest">
            <h2>
              Вопрос {currQuest}/{COUNT_GAMEROUNDS}
            </h2>
          </div>
          {showCorrectAnswer && (
            <div className="show-correct-answer">
              <div className="game-card-info">
                <div className="game-card-img" style={{ backgroundImage: `url(${BASE_LINK}/${image})` }}></div>
                <div className="game-card-subtitle">
                  <div className="game-card__audio" onClick={() => playAudioGame(audio)}>
                    <i className="fa-solid fa-circle-play"></i>
                  </div>
                  <div className="game-card-subtitle-info">
                    <p className="game-info-text">{word}</p>
                    <p className="game-info-text">{transcription}</p>
                    <p className="game-info-text">{wordTranslate}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="answerButtons">
            {answers?.map((answer, index) => (
              <button
                className="game_Button"
                key={index}
                onClick={(event) => {
                  setCurrQuest(currQuest + 1);
                  if (currQuest < COUNT_GAMEROUNDS) {
                    checkAnswer(answer, event);
                  } else {
                    return;
                  }
                }}
              >
                {answer[0].wordTranslate}
              </button>
            ))}
          </div>
          <button
            className="next-question game_Button"
            onClick={() => {
              document.querySelector('.correct')?.classList.remove('correct');
              document.querySelector('.uncorrect')?.classList.remove('uncorrect');
              getQuestion();
              setShowCorrectAnswer(false);
            }}
          >
            Дальше
          </button>
        </div>
      ) : (
        <div>Спасибо за игру!</div>
      )}
    </main>
  );
}
