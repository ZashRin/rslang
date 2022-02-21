/* eslint-disable no-unused-vars */
import React, { Fragment, useCallback, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WordGroupSlider } from '../WordGroupSlider/WordGroupSlider';
import './wordPageMenu.css';
import { Context } from '../../Context/Context';
import { getAggregatedWords, getUserWords } from '../../utils/api';
import { CONDITION_BOOK_PAGE, PAGE_NAMES } from '../../constants/constants';

export function WordPageMenu({ page, setPage, minPage, maxPage, group, setGroup, menu, setMenu, color, setColor }) {
  // eslint-disable-next-line no-unused-vars
  const [context, setContext] = useContext(Context);
  const updateUserWordBook = useCallback(async () => {
    const combinedUserWords = await getUserWords(context.id, context.token);
    const userWords = combinedUserWords.filter((el) => el.difficulty === 'hard');
    const userLearnWords = combinedUserWords.filter((el) => el.difficulty === 'learn');
    setContext({
      ...context,
      userWords: userWords,
      userLearnWords: userLearnWords,
      currentPage: CONDITION_BOOK_PAGE.currentValue,
    });
  }, [context, setContext]);
  const returnMainPage = () => {
    setContext({ ...context, currentPage: PAGE_NAMES.MAIN.name });
  };
  return (
    <div className="WordPage-menu">
      <div className="WordPage-menu-wrapper">
        <div className="WordPage-menu-links">
          <i className="fa-solid fa-house-chimney" onClick={returnMainPage}></i>
          {context.id ? (
            <p
              onClick={() => {
                CONDITION_BOOK_PAGE.currentValue =
                  CONDITION_BOOK_PAGE.currentValue === PAGE_NAMES.WORKBOOK.name
                    ? PAGE_NAMES.DICTIONARY.name
                    : PAGE_NAMES.WORKBOOK.name;
                updateUserWordBook();
              }}
              className="WordPage-menu-links__game"
            >
              {context.currentPage === 'Учебник' ? <Fragment>Словарь</Fragment> : <Fragment>Учебник</Fragment>}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="WordPage-menu-slider">
          {context.currentPage === 'Учебник' ? (
            <Fragment>
              <Button
                variant="info"
                disabled={page === minPage ? true : false}
                className="WordGroup-clicker-SuperMinus"
                onClick={() => {
                  setPage(minPage);
                }}
              >
                &laquo;
              </Button>
              <Button
                variant="info"
                disabled={page === minPage ? true : false}
                className="WordGroup-clicker-minus"
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                &#60;
              </Button>
              <div className="WordPage-count">{page + 1}/30 </div>
              <Button
                variant="info"
                className="WordGroup-clicker-plus"
                disabled={page === maxPage ? true : false}
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                &#62;
              </Button>
              <Button
                variant="info"
                className="WordGroup-clicker-SuperPlus"
                disabled={page === maxPage ? true : false}
                onClick={() => {
                  setPage(maxPage);
                }}
              >
                &raquo;
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <p className="count-hardWords">Сложные слова: {context.userWords.length}</p>{' '}
            </Fragment>
          )}
        </div>
        {context.currentPage === 'Учебник' ? (
          <WordGroupSlider
            setGroup={setGroup}
            group={group}
            setPage={setPage}
            page={page}
            menu={menu}
            setMenu={setMenu}
            color={color}
            setColor={setColor}
          />
        ) : (
          <Fragment>
            <p className="count-learndWords">Изученные слова: {context.userLearnWords.length}</p>{' '}
          </Fragment>
        )}
      </div>
    </div>
  );
}
