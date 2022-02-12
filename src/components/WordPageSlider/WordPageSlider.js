import React from 'react';
import './wordPageSlider.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export function WordPageSlider({ page, setPage, minPage, maxPage }) {
  return (
    <div className="WordPage-menu">
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
  );
}
