import React, { Fragment } from 'react';
import './styles.css';
import { NavMenu } from '../Header/HeaderNav';
import { LoginForm } from '../LoginForm/LoginForm';

export function Header() {
  function showLoginForm() {
    <LoginForm />;
  }
  return (
    <>
      <header className="header">
        <div className="header_logo"></div>
        <NavMenu />
        <button className="autorisation" onClick={showLoginForm}>
          <p className="login_text">Войти</p>
        </button>
      </header>
    </>
  );
}
