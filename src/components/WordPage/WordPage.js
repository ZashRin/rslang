import React, { Fragment, useEffect, useState } from 'react';
import { getWords } from '../../utils/api';
import { WordCard } from '../WordCard/WordCard';

export function WordPage() {
  const [obj, setObj] = useState();
  useEffect(() => {
    getWords().then(setObj);
  }, []);
  return (
    <Fragment>
      {obj?.map((el) => (
        <WordCard key={el.id} {...el} />
      ))}
      ;
    </Fragment>
  );
}
