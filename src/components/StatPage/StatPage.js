import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { Context } from '../../Context/Context';
import { getUserSettings, getUserStat, updateUser, updateUserSettings, updateUserStat } from '../../utils/api';
import { clearStorage } from '../../utils/storage';

export function StatPage() {
  const [context, setContext] = useContext(Context);
  const { id, token, authenticated } = context;
  const getStat = useCallback(async () => {
    const userLearnedWords = await getUserStat(id, token);
    const userWordsPerDay = await getUserSettings(id, token);
    setContext((prevContext) => ({
      ...prevContext,
      learned: userLearnedWords.learnedWords,
      wordsPerDay: userWordsPerDay.wordsPerDay,
    }));
  }, [id, token, setContext]);
  // eslint-disable-next-line no-unused-vars
  const setStat = useCallback(async () => {
    await updateUserStat(context.id, context.token, 3);
    await updateUserSettings(context.id, context.token, 1);
  }, [context.id, context.token]);
  useEffect(() => {
    if (authenticated) {
      getStat();
    }
  }, [authenticated, getStat]);

  const newName = useRef(null);
  return (
    <>
      <div className="userControls">
        <input
          ref={newName}
          type="text"
          name="name"
          autoComplete="off"
          className="userControlsInput"
          defaultValue={context.authenticated ? context.name : ''}
        ></input>
        <button
          className="userControlsBtn"
          onClick={() => {
            updateUser(context.id, context.token, {
              email: context.email,
              password: context.password,
              name: newName.current.value,
            });
          }}
        >
          Сохранить
        </button>
        <a
          href="/"
          className="closePage logout"
          onClick={() => {
            clearStorage();
            setContext({ ...context, id: null, token: null, name: null, authenticated: false });
          }}
        >
          Выйти
        </a>
      </div>
      <div className="statistic">
        <h2>Статистика</h2>
        <p>Выученые слова: {context.learned ? context.learned : 0}</p>
        <p>Слов за день: {context.wordsPerDay ? context.wordsPerDay : 0}</p>
      </div>
      <a className="closePage" href="/">
        x
      </a>
    </>
  );
}
