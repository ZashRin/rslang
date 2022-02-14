import React, { useCallback, useRef, useState, useContext } from 'react';
import { Context } from '../../Context/Context';
import { createUser, getUserWords, loginUser } from '../../utils/api';
import { validateEmail } from '../../utils/generalUtils';
import './styles.css';

export function LoginForm() {
  const [email, inputEmail] = useState();
  const name = email;
  const [password, inputPswd] = useState();
  const [context, setContext] = useContext(Context);
  const crUsr = useCallback(() => {
    createUser({ name, email, password }).then((result) => {
      const userWords = getUserWords(result.userId, result.token);
      setContext({ ...context, id: result.userId, token: result.token, userWords: userWords });
    });
  }, [name, email, password, setContext, context]);
  const login = useCallback(() => {
    loginUser({ email, password }).then((result) => {
      const userWords = getUserWords(result.userId, result.token);
      setContext({ ...context, id: result.userId, token: result.token, userWords: userWords });
    });
  }, [context, email, password, setContext]);
  const validation = useRef(null);
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
          <input
            type="submit"
            className="fadeIn third"
            value="Войти"
            onClick={(e) => {
              e.preventDefault();
              if (!validateEmail(email)) {
                validation.current.innerText = 'Невалидный Email';
                return;
              }
              if (password.length < 8) {
                validation.current.innerText = 'Минимальная длина пароля - 8 символов';
                return;
              }
              login();
            }}
          ></input>
          <input
            type="submit"
            className="fadeIn third"
            id="signUp"
            value="Регистрация"
            onClick={(e) => {
              e.preventDefault();
              if (!validateEmail(email)) {
                validation.current.innerText = 'Невалидный Email';
                return;
              }
              if (password.length < 8) {
                validation.current.innerText = 'Минимальная длина пароля - 8 символов';
                return;
              }
              crUsr();
            }}
          ></input>
        </div>
      </form>
    </div>
  );
}
