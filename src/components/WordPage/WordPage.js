import React, { useContext, useEffect, useState } from 'react';
import { MAX_PAGE, MIN_PAGE } from '../../constants/constants';
import { Context } from '../../Context/Context';
import { getWords } from '../../utils/api';
import { WordCard } from '../WordCard/WordCard';
import { WordPageMenu } from '../WordPageMenu/WordPageMenu';
import './wordPage.css';

export function WordPage() {
  const [wordsArray, setWordsArray] = useState();
  const [group, setGroup] = useState(0);
  const [page, setPage] = useState(0);
  const [menu, setMenu] = useState('hidden');
  const [color, setColor] = useState('255 19 32 / 40%');
  // eslint-disable-next-line no-unused-vars
  const [context, setContext] = useContext(Context);
  useEffect(() => {
    getWords(group, page).then(setWordsArray);
  }, [group, page]);

  return (
    <div className="BookPage-wrapper">
      <div className="BookPage-content">
        {context.currentPage === 'Сложные' ? (
          <div className="BookPage">
            {context?.userWordBook.map((el) => (
              <WordCard color={color} key={el.id} {...el} />
            ))}
          </div>
        ) : (
          <div className="BookPage">
            {wordsArray?.map((el) => (
              <WordCard color={color} key={el.id} {...el} />
            ))}
          </div>
        )}

        <WordPageMenu
          group={group}
          setGroup={setGroup}
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
