import React, { useEffect, useState } from 'react';
import { MAX_PAGE, MIN_PAGE } from '../../constants/constants';
import { getWords } from '../../utils/api';
import { WordCard } from '../WordCard/WordCard';
import { WordPageMenu } from '../WordPageMenu/WordPageMenu';
import './wordPage.css';

export function WordPage() {
  const [obj, setObj] = useState();
  const [group, setGroup] = useState(0);
  const [page, setPage] = useState(0);
  const [menu, setMenu] = useState('hidden');
  const [color, setColor] = useState('255 19 32 / 60%');
  useEffect(() => {
    getWords(group, page).then(setObj, setGroup, setPage);
  }, [group, page]);
  return (
    <div className="BookPage-wrapper">
      <div className="BookPage-content">
        <div className="BookPage">
          {obj?.map((el) => (
            <WordCard key={el.id} {...el} />
          ))}
        </div>
        <WordPageMenu
          setGroup={setGroup}
          group={group}
          setPage={setPage}
          page={page}
          minPage={MIN_PAGE}
          maxPage={MAX_PAGE}
          menu={menu}
          setMenu={setMenu}
          color={color}
          setColor={setColor}
        />
      </div>
    </div>
  );
}
