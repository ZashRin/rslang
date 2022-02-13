import React, { Fragment } from 'react';
import './styles.css';

export function Footer() {
  return (
    <Fragment>
      <footer class="footer">
        <div class="footer-logo">
          <a class="footer-logo_link" href="https://rs.school/js/">
            <img src="https://rs.school/images/rs_school_js.svg" alt="RSSchool-logo"></img>
          </a>
        </div>
        <div class="footer-git">
          <ul class="footer-gitLinks">
            <li class="gitLinks-item">
              <a class="gitLink" href="https://github.com/zashrin">
                Aliaksei
              </a>
            </li>
            <li class="gitLinks-item">
              <a class="gitLink" href="https://github.com/alexander-gma">
                Alexander
              </a>
            </li>
            <li class="gitLinks-item">
              <a class="gitLink" href="https://github.com/litvinkirill">
                Kirill
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-year">
          <p>2022</p>
        </div>
      </footer>
    </Fragment>
  );
}
