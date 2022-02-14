import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import { clearStorage } from '../../utils/storage';

export function StatPage() {
  const [context, setContext] = useContext(Context);
  return (
    <>
      <div className="userControls">
        <input type="text" name="name" autoComplete="off" placeholder="Имя" className="userControlsInput" value></input>
        <button className="userControlsBtn" onClick={() => {}}>
          Сохранить
        </button>
        <a
          className="closePage logout"
          href="/rslang/"
          onClick={() => {
            clearStorage();
            delete context.id;
            delete context.token;
            setContext({ ...context, authenticated: false });
          }}
        >
          Выйти
        </a>
      </div>
      <div className="statistic">
        <h2>Статистика</h2>
      </div>
      <a className="closePage" href="/rslang/">
        x
      </a>
    </>
  );
}
