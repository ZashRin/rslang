import React from 'react';
import './wordPageSlider.css';

export function WordPageSlider({ page, setPage, minPage, maxPage }) {
  return (
    <div className="WordPage-menu">
      <button
        disabled={page === minPage ? true : false}
        className="WordGroup-clicker-SuperMinus"
        onClick={() => {
          setPage(minPage);
        }}
      >
        &laquo;
      </button>
      <button
        disabled={page === minPage ? true : false}
        className="WordGroup-clicker-minus"
        onClick={() => {
          setPage(page - 1);
        }}
      >
        &#60;
      </button>
      <div className="WordPage-count">{page + 1}/30 </div>
      <button
        className="WordGroup-clicker-plus"
        disabled={page === maxPage ? true : false}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        &#62;
      </button>
      <button
        className="WordGroup-clicker-SuperPlus"
        disabled={page === maxPage ? true : false}
        onClick={() => {
          setPage(maxPage);
        }}
      >
        &raquo;
      </button>
    </div>
  );
}
