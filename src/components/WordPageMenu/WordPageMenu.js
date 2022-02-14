import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WordGroupSlider } from '../WordGroupSlider/WordGroupSlider';
import './wordPageMenu.css';
import { Context } from '../../Context/Context';

export function WordPageMenu({ page, setPage, minPage, maxPage, group, setGroup, menu, setMenu, color, setColor }) {
  // eslint-disable-next-line no-unused-vars
  const [context, setContext] = useContext(Context);
  return (
    <div className="WordPage-menu">
      <div className="WordPage-menu-wrapper">
        <div className="WordPage-menu-links">
          <i className="fa-solid fa-house-chimney"></i>
          {context.id ? <p className="WordPage-menu-links__game">Словарь</p> : <></>}
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
