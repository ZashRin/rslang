import React, { Fragment } from 'react';
import './styles.css';

export function TeamDescription() {
  return (
    <>
      <section className="team">
        <div className="team_wrapp">
          <div className="team_descript_wrap">
            <div className="team_title_wrap">
              <h2 className="team_title">Наша команда</h2>
            </div>
            <div className="team-cards">
              <div className="team-card">
                <h3>Алексей</h3>
                <p className="team_info">Сделал</p>
              </div>
              <div className="team-card">
                <h3>Александр</h3>
                <p className="team_info">Сделал</p>
              </div>
              <div className="team-card">
                <h3>Кирилл</h3>
                <p className="team_info">Сделал</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
