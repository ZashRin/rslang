import React from 'react';
import './styles.css';

export function LoginForm() {
  return (
    <div id="formContent" className="fadeInDown">
      <form>
        <input type="email" id="login" className="fadeIn first inputText" name="login" placeholder="Email"></input>
        <input
          type="password"
          id="password"
          className="fadeIn second inputText"
          name="login"
          placeholder="Пароль"
        ></input>
        <div className="btnCont fadeIn third">
          <input type="submit" className="fadeIn third" value="Войти"></input>
          <input type="submit" className="fadeIn third" id="signUp" value="Регистрация"></input>
        </div>
      </form>
    </div>
  );
}
