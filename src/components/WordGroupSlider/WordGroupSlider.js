import React from 'react';
import { INDEX_GROUP } from '../../constants/constants';

export function WordGroupSlider({ group, setGroup, page, setPage }) {
  return (
    <div className="WordGroup-menu">
      <div className="WordGroup-visible">Word group:{group + 1} </div>
      <div className="WordGroup-container">
        {INDEX_GROUP.map((el) => (
          <div key={el.toString()} className="WordGroup-el" onClick={() => setGroup((group = el), setPage((page = 0)))}>
            {el + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
