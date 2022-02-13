import React, { Fragment } from 'react';
import './styles.css';

export function AppDescription() {
  return (
    <>
      <section className="appAbout">
        <div className="aboutWrapp">
          <div className="about-info">
            <h2 className="appName">
              <span className="appName_title">RSLang</span> - простое приложение для изучения английского языка!
            </h2>
            <img
              className="engl-img"
              src="https://gymn19.ru/upload/resize_cache/iblock/8f6/650_350_1/8f6ebe90aa1967672a7190658f31bdf8.png"
              alt="english"
            ></img>
          </div>
        </div>
      </section>
      <section className="app_descript">
        <div className="aboutWrapp">
          <div className="app_descript__wrapp">
            <div className="about-text">
              <p>
                Запоминать английские слова может быть весело и не сложно. Играйте в игры, слушайте произношение,
                совершенствуйте свои знания. С нашим приложением обучение становится радостью.
              </p>
            </div>
            <div className="separator"></div>
            <div className="advantWrap">
              <h2 className="advant_title">Возможности и преимущества приложения</h2>
              <div className="advantCards">
                <div className="advantCard book">
                  <h3 className="card_title">Электронный учебник</h3>
                  <div className="separator"></div>
                  <p className="card_info">
                    Электронный учебник состоит из шести разделов. В каждом разделе 30 страниц по 20 слов. Представлены
                    перевод слова, тематическое изображение, а также произношение как слова отдельно, так и в составе
                    словосочетания.
                  </p>
                </div>
                <div className="advantCard dictionary">
                  <h3 className="card_title">Словарь</h3>
                  <div className="separator"></div>
                  <p className="card_info">
                    Словарь содержит списки изучаемых слов, слов, которые не нужно учить, а также тех, которые вызывают
                    затруднения. В словаре отражена статистика по каждому разделу и успеваемость учащихся.
                  </p>
                </div>
                <div className="advantCard card_games">
                  <h3 className="card_title">Игры</h3>
                  <div className="separator"></div>
                  <p className="card_info">
                    Для изучения слов и закрепления запоминания в приложении есть 4 игры: Savannah, Sprint, Audio
                    Chalenge и Imaginarium, которые помогут вам в игровой форме «прокачать» словарный запас.
                  </p>
                </div>
                <div className="advantCard card_stat">
                  <h3 className="card_title">Статистика</h3>
                  <div className="separator"></div>
                  <p className="card_info">
                    Весь прогресс обучения можно посмотреть в статистике, где представлены данные как за текущий день,
                    так и за весь период обучения. Информация представлена как в виде таблицы, так и в виде графиков,
                    что очень удобно.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
