import React, { useContext, useEffect, useState } from 'react';
import { MAX_PAGE, MIN_PAGE } from '../../constants/constants';
import { Context } from '../../Context/Context';
import { getWords } from '../../utils/api';
import { WordCard } from '../WordCard/WordCard';
import { WordPageMenu } from '../WordPageMenu/WordPageMenu';
import './wordPage.css';

export function WordPage() {
  const [group, setGroup] = useState(0);
  const [page, setPage] = useState(0);
  const [menu, setMenu] = useState('hidden');
  const [color, setColor] = useState('255 19 32 / 40%');
  // eslint-disable-next-line no-unused-vars
  const [context, setContext] = useContext(Context);
  useEffect(() => {
    getWords(group, page).then((result) => setContext({ ...context, words: result }));
  }, [group, page]);
  // useEffect(() => {
  //   getUserWords(context.id, context.token).then((result) =>
  //     setContext({ ...context, userWords: result, currentPage: CONDITION_BOOK_PAGE.currentValue })
  //   );
  // }, [group, page]);

  return (
    <div className="BookPage-wrapper">
      <div className="BookPage-content">
        {context.currentPage === 'Сложные' ? (
          <div className="BookPage">
            {context?.userWords.map((el) => (
              <WordCard color={color} key={el.id} wordObject={el} hard={true} />
            ))}
          </div>
        ) : (
          <div className="BookPage">
            {context.words?.map((el) => (
              <WordCard color={color} key={el.id} wordObject={el} />
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
