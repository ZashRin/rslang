import React, { useCallback, useRef, useState, useContext } from 'react';
import { Context } from '../../Context/Context';
import { createUser, getAggregatedWords, getUserWords, loginUser } from '../../utils/api';
import { validateEmail } from '../../utils/generalUtils';
import './styles.css';

export function LoginForm() {
  const [email, inputEmail] = useState();
  const name = email;
  const [password, inputPswd] = useState();
  const [context, setContext] = useContext(Context);
  const crUsr = useCallback(async () => {
    const result = await createUser({ name, email, password });
    const userWords = await getUserWords(result.userId, result.token);
    const userLearnWords = await getAggregatedWords(result.userId, result.token, 'learn');
    setContext({
      ...context,
      id: result.userId,
      token: result.token,
      userWords: userWords,
      modalIsOpen: false,
      authenticated: true,
      userLearnWords: userLearnWords,
    });
  }, [name, email, password, context, setContext]);
  const login = useCallback(async () => {
    const result = await loginUser({ email, password });
    const userWords = await getUserWords(result.userId, result.token);
    // const userLearnWords = await getAggregatedWords(result.userId, result.token, 'learn');
    // const { paginatedResults, totalCount } = userLearnWords[0];
    setContext({
      ...context,
      id: result.userId,
      token: result.token,
      name: result.name,
      authenticated: true,
      email: email,
      password: password,
      userWords: userWords,
      modalIsOpen: false,
      // userLearnWords: paginatedResults,
      // userLearnWordsCount: totalCount[0].count,
    });
  }, [email, password, context, setContext]);
  const validation = useRef(null);

  const handleInput = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      validation.current.innerText = 'Невалидный Email';
      return;
    }
    if (password.length < 8) {
      validation.current.innerText = 'Минимальная длина пароля - 8 символов';
      return;
    }
  };

  const loginClick = (e) => {
    handleInput(e);
    login();
  };

  const createClick = (e) => {
    handleInput(e);
    crUsr();
  };

  return (
    <div id="formContent" className="fadeInDown">
      <form>
        <input
          type="email"
          id="login"
          className="fadeIn first inputText"
          name="login"
          placeholder="Email"
          onChange={(e) => inputEmail(e.target.value)}
        ></input>
        <input
          type="password"
          id="password"
          className="fadeIn second inputText"
          name="login"
          placeholder="Пароль"
          onChange={(e) => inputPswd(e.target.value)}
        ></input>
        <p ref={validation} className="validation fadeIn third"></p>
        <div className="btnCont fadeIn third">
          <input type="submit" className="fadeIn third" value="Войти" onClick={loginClick}></input>
          <input type="submit" className="fadeIn third" id="signUp" value="Регистрация" onClick={createClick}></input>
        </div>
      </form>
    </div>
  );
}
