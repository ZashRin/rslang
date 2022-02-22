import React, { Fragment } from 'react';
import './styles.css';

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-logo">
          <div className="logo_rsL"></div>
          <div className="logo_link_wrap">
            <a className="footer-logo_link" href="https://rs.school/js/">
              <img src="https://rs.school/images/rs_school_js.svg" alt="RSSchool-logo"></img>
            </a>
          </div>
        </div>
        <div className="footer-git">
          <ul className="footer-gitLinks">
            <li className="gitLinks-item">
              <a className="gitLink" href="https://github.com/zashrin">
                Aliaksei
              </a>
            </li>
            <li className="gitLinks-item">
              <a className="gitLink" href="https://github.com/alexander-gma">
                Alexander
              </a>
            </li>
            <li className="gitLinks-item">
              <a className="gitLink" href="https://github.com/litvinkirill">
                Kirill
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-year">
          <p>2022</p>
        </div>
      </footer>
    </>
  );
}
