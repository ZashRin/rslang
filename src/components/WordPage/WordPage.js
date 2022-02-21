/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { MAX_PAGE, MIN_PAGE, PAGE_NAMES } from '../../constants/constants';
import { Context } from '../../Context/Context';
import { getUserWords, getWords } from '../../utils/api';
import { WordCard } from '../WordCard/WordCard';
import { WordPageMenu } from '../WordPageMenu/WordPageMenu';
import './wordPage.css';

export function WordPage() {
  const [group, setGroup] = useState(0);
  const [page, setPage] = useState(0);
  const [menu, setMenu] = useState('hidden');
  const [color, setColor] = useState('255 19 32 / 40%');
  const [context, setContext] = useContext(Context);
  useEffect(async () => {
    const result = await getWords(group, page);
    let userWords;
    let userLearnWords;
    if (context.authenticated) {
      const combinedUserWords = await getUserWords(context.id, context.token);
      userWords = combinedUserWords.filter((el) => el.difficulty === 'hard');
      userLearnWords = combinedUserWords.filter((el) => el.difficulty === 'learn');
    }
    await setContext({
      ...context,
      words: result,
      userWords: userWords,
      userLearnWords: userLearnWords,
      wordBookPage: page,
    });
  }, [group, page, setContext]);

  return (
    <div className="BookPage-wrapper">
      <div className="BookPage-content">
        {context.currentPage === PAGE_NAMES.WORKBOOK.name ? (
          <div className="BookPage">
            {context.words?.map((el) => (
              <WordCard color={color} key={el.id} wordObject={el} />
            ))}
          </div>
        ) : (
          <div className="BookPage">
            {context?.userWords.map((el) => (
              <WordCard color={color} key={el.id} wordObject={el} hard={true} />
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
