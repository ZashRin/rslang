import React, { Fragment } from 'react';
import './styles.css';
import { NavMenu } from '../Header/HeaderNav';

export function Header() {
  return (
    <>
      <header className="header">
        <div className="header_wrap">
          <div className="header_logo"></div>
          <NavMenu />
          <button className="autorisation">
            <p className="login_text">ВОЙТИ</p>
          </button>
        </div>
      </header>
    </>
  );
}
