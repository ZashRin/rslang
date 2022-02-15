/* eslint-disable no-unused-vars */
import React, { Fragment, useCallback, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WordGroupSlider } from '../WordGroupSlider/WordGroupSlider';
import './wordPageMenu.css';
import { Context } from '../../Context/Context';
import { getUserWords } from '../../utils/api';
import { CONDITION_BOOK_PAGE } from '../../constants/constants';

export function WordPageMenu({ page, setPage, minPage, maxPage, group, setGroup, menu, setMenu, color, setColor }) {
  // eslint-disable-next-line no-unused-vars
  const [context, setContext] = useContext(Context);
  const updateUserWordBook = useCallback(() => {
    getUserWords(context.id, context.token).then((result) =>
      setContext({
        ...context,
        userWords: result,
        currentPage: CONDITION_BOOK_PAGE.currentValue,
      })
    );
  }, [context, setContext]);

  return (
    <div className="WordPage-menu">
      <div className="WordPage-menu-wrapper">
        <div className="WordPage-menu-links">
          <i className="fa-solid fa-house-chimney"></i>
          {context.id ? (
            <p
              onClick={() => {
                CONDITION_BOOK_PAGE.currentValue =
                  CONDITION_BOOK_PAGE.currentValue === 'Учебник' ? 'Сложные' : 'Учебник';
                updateUserWordBook();
              }}
              className="WordPage-menu-links__game"
            >
              {CONDITION_BOOK_PAGE.currentValue === 'Учебник' ? (
                <Fragment>Сложные</Fragment>
              ) : (
                <Fragment>Учебник</Fragment>
              )}
            </p>
          ) : (
            <></>
          )}
          <p className="WordPage-menu-links__game">Тренировка</p>
        </div>
        <div className="WordPage-menu-slider">
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
        </div>
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
      </div>
    </div>
  );
}
