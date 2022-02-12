import React, { useCallback, useState } from 'react';
import { createUser, loginUser } from '../../utils/api';
import './styles.css';

export function LoginForm() {
  const [email, inputEmail] = useState();
  const name = email;
  const [password, inputPswd] = useState();
  const crUsr = useCallback(() => {
    createUser({ name, email, password });
  }, [name, email, password]);
  const login = useCallback(() => {
    loginUser({ email, password });
  }, [email, password]);
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
        <div className="btnCont fadeIn third">
          <input
            type="submit"
            className="fadeIn third"
            value="Войти"
            onClick={(e) => {
              e.preventDefault();
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
              crUsr();
            }}
          ></input>
        </div>
      </form>
    </div>
  );
}
