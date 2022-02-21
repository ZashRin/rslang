import React, { useCallback, useContext, useEffect, useState } from 'react';
import { getWords } from '../../utils/api';
import { getRound } from './getRound';
import { Context } from '../../Context/Context';
import { COUNT_GAMEROUNDS } from '../../constants/constants';
import './styles.css';
import { BASE_LINK } from '../../constants/apiLinks';
import { playAudioGame } from '../../utils/audio';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function AudioGame() {
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState({});
  const [currQuest, setCurrQuest] = useState(1);
  const [statCorrectAnswer, setStatCorrectAnswer] = useState([]);
  const [context, setContext] = useContext(Context);
  const [group, setGroup] = useState();
  const [answers, setAnswers] = useState([]);
  const [gameModalIsOpen, setgameModalIsOpen] = useState(true);

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

  function getQuestion() {
    setAnswers(getRound(context.gameWords));
  }

  const playSound = () => {
    const { audio } = answers.find((el) => el[1])[0];
    playAudioGame(audio);
  };

  const checkAnswer = (answer, event) => {
    if (answer[1]) {
      event.target.classList.add('correct');
      setStatCorrectAnswer([...statCorrectAnswer, true]);
    } else {
      event.target.classList.add('uncorrect');
      setStatCorrectAnswer([...statCorrectAnswer, false]);
    }
    setCorrectAnswer(answers.find((el) => el[1])[0]);
    setShowCorrectAnswer(true);
  };

  const { word, wordTranslate, transcription, image, audio } = correctAnswer;

  const closeModal = () => {
    setgameModalIsOpen(false);
    getQuestion();
    setGameStarted(true);
  };

  function openModal() {
    setGameStarted(false);
    setgameModalIsOpen(true);
    setCurrQuest(1);
    setShowCorrectAnswer(false);
  }

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
      <Modal isOpen={gameModalIsOpen} style={customStyles}>
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
                    <option disabled>Уровень</option>
                    <option defaultValue value="1">
                      1
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </p>
                <p id="demo"></p>
                <button className="game_Button">Отмена</button>
                <button onClick={closeModal} className="game_Button">
                  Начать игру!
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
      {currQuest <= COUNT_GAMEROUNDS && gameStarted && (
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
                  if (currQuest <= COUNT_GAMEROUNDS) {
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
              setCurrQuest(currQuest + 1);
              document.querySelector('.correct')?.classList.remove('correct');
              document.querySelector('.uncorrect')?.classList.remove('uncorrect');
              if (currQuest < COUNT_GAMEROUNDS) getQuestion();
              setShowCorrectAnswer(false);
            }}
          >
            Дальше
          </button>
        </div>
      )}
      {!(currQuest <= COUNT_GAMEROUNDS) && (
        <div className="endGameStat">
          <div>Спасибо за игру!</div>
          <div>
            Ваш результат: {((statCorrectAnswer.filter((el) => el).length / statCorrectAnswer.length) * 100).toFixed(2)}
            %
          </div>
          <button
            onClick={() => {
              openModal();
            }}
          >
            Еще раз!
          </button>
        </div>
      )}
    </main>
  );
}
