import React from 'react';
import { useRef } from 'react';
import './wordPageSlider.css';

export function WordPageSlider({ page, setPage, minPage, maxPage }) {
  const nextBtn = useRef(null);
  const superNextBtn = useRef(null);
  const prevBtn = useRef(null);
  const superPrevBtn = useRef(null);
  return (
    <div className="WordPage-menu">
      <button
        ref={superPrevBtn}
        className="WordGroup-clicker-SuperMinus"
        onClick={() => {
          setPage(minPage);
          nextBtn.current.disabled = false;
          superNextBtn.current.disabled = false;
        }}
      >
        &laquo;
      </button>
      <button
        ref={prevBtn}
        className="WordGroup-clicker-minus"
        onClick={() => {
          setPage(page - 1);
          if (page === minPage) {
            setPage(minPage);
            prevBtn.current.disabled = true;
            superPrevBtn.current.disabled = true;
          }
          nextBtn.current.disabled = false;
          superNextBtn.current.disabled = false;
        }}
      >
        &#60;
      </button>
      <div className="WordPage-count">{page + 1}/30 </div>
      <button
        ref={nextBtn}
        className="WordGroup-clicker-plus"
        onClick={(e) => {
          prevBtn.current.disabled = false;
          superPrevBtn.current.disabled = false;
          if (page === maxPage - 1) {
            nextBtn.current.disabled = true;
            superNextBtn.current.disabled = true;
          }
          setPage(page + 1);
        }}
      >
        &#62;
      </button>
      <button
        ref={superNextBtn}
        className="WordGroup-clicker-SuperPlus"
        onClick={(e) => {
          setPage(maxPage);
          nextBtn.current.disabled = true;
          superNextBtn.current.disabled = true;
          prevBtn.current.disabled = false;
          superPrevBtn.current.disabled = false;
        }}
      >
        &raquo;
      </button>
    </div>
  );
}
