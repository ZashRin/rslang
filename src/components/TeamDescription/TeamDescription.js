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
                <p className="team_info">
                  Team Lead проекта. Отвечал за архитектуру приложения. Координировал работу команды. Настроил
                  регистрацию и авторизацию пользователя. Внес вклад в настройку бекенда для работы приложения.
                </p>
              </div>
              <div className="team-card">
                <h3>Александр</h3>
                <p className="team_info">
                  Cоздатель электронного учебника со ссылками на его страницы, за навигацию по разделам, страницам
                  учебника. Внес вклад в настройку бекенда для работы приложения.
                </p>
              </div>
              <div className="team-card">
                <h3>Кирилл</h3>
                <p className="team_info">Создатель главной страницы приложения. Создатель игры "Аудиовызов".</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
