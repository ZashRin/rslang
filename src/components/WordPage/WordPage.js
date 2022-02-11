import React, { useEffect, useState } from 'react';
import { getWords } from '../../utils/api';
import { WordCard } from '../WordCard/WordCard';
import './wordPage.css';

export function WordPage() {
  const [obj, setObj] = useState();
  useEffect(() => {
    getWords().then(setObj);
  }, []);
  return (
    <div className="BookPage">
      {obj?.map((el) => (
        <WordCard key={el.id} {...el} />
      ))}
      ;
    </div>
  );
}
