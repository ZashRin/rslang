import React, { useEffect, useState, useContext } from 'react';
import { MAX_PAGE, MIN_PAGE } from '../../constants/constants';
import { getWords } from '../../utils/api';
import { WordCard } from '../WordCard/WordCard';
import { WordPageMenu } from '../WordPageMenu/WordPageMenu';
import { Context } from '../../Context/Context';
import './wordPage.css';

export function WordPage() {
  const [obj, setObj] = useState();
  // eslint-disable-next-line no-unused-vars
  const [group, setGroup] = useState(0);
  const [page, setPage] = useState(0);
  const [menu, setMenu] = useState('hidden');
  const [color, setColor] = useState('255 19 32 / 40%');
  // eslint-disable-next-line no-unused-vars
  const [context, setContext] = useContext(Context);
  useEffect(() => {
    getWords(group, page).then(setObj);
  }, [group, page]);
  // useEffect(() => {
  //   getUserWords(context.id, context.token).then(setUserObj);
  // }, [context.id, context.token]);
  return (
    <div className="BookPage-wrapper">
      <div className="BookPage-content">
        <div></div>
        <div className="BookPage">
          {obj?.map((el) => (
            <WordCard color={color} key={el.id} {...el} />
          ))}
        </div>
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
