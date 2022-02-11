import React, { useEffect, useState } from 'react';
import { MAX_PAGE, MIN_PAGE } from '../../constants/constants';
import { getWords } from '../../utils/api';
import { WordCard } from '../WordCard/WordCard';
import { WordGroupSlider } from '../WordGroupSlider/WordGroupSlider';
import { WordPageSlider } from '../WordPageSlider/WordPageSlider';
import './wordPage.css';

export function WordPage() {
  const [obj, setObj] = useState();
  const [group, setGroup] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(() => {
    getWords(group, page).then(setObj, setGroup, setPage);
  }, [group, page]);
  return (
    <div className="BookPage-wrapper">
      <WordGroupSlider setGroup={setGroup} group={group} setPage={setPage} page={page} />
      <div className="BookPage">
        {obj?.map((el) => (
          <WordCard key={el.id} {...el} />
        ))}
        ;
      </div>
      <WordPageSlider setPage={setPage} page={page} minPage={MIN_PAGE} maxPage={MAX_PAGE} />
    </div>
  );
}
