import React, { useContext } from 'react';
import { INDEX_GROUP, GROUP_MENU_COLORS } from '../../constants/constants';
import { Context } from '../../Context/Context';
import './wordGroupSlider.css';

export function WordGroupSlider({ group, setGroup, page, setPage, menu, setMenu, color, setColor }) {
  const [context, setContext] = useContext(Context);
  return (
    <div className="WordGroup-menu">
      <div className="WordGroup-container" style={{ visibility: menu }}>
        {INDEX_GROUP.map((el) => (
          <div
            key={el.toString()}
            className="WordGroup-el WordGroup-el__circle"
            style={{ backgroundColor: `rgba(${GROUP_MENU_COLORS[el]})` }}
            onClick={() => {
              setGroup((group = el));
              setPage((page = 0));
              setColor(`${GROUP_MENU_COLORS[el]}`);
              setContext({ ...context, wordBookPage: page, wordBookGroup: group });
            }}
          >
            {el + 1}
          </div>
        ))}
      </div>
      <div
        className="WordGroup-main-el WordGroup-el__circle-main"
        style={{ backgroundColor: `rgba(${color})` }}
        onClick={() => setMenu(menu === 'visible' ? 'hidden' : 'visible')}
      >
        <p>{group + 1}</p>
      </div>
    </div>
  );
}
