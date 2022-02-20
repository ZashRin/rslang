import React, { useContext } from 'react';
import { PAGE_NAMES } from '../../constants/constants';
import { Context } from '../../Context/Context';

function NavLink({ page, handlePageChange }) {
  return (
    <div
      onClick={() => {
        handlePageChange(page);
      }}
    >
      {page.name}
    </div>
  );
}

export function NavMenu() {
  const [context, setContext] = useContext(Context);
  const setPage = (page) => {
    setContext({ ...context, currentPage: page.name });
  };
  return (
    <nav className="header_nav">
      {Object.keys(PAGE_NAMES)
        .filter((page) => PAGE_NAMES[page].name !== PAGE_NAMES.DICTIONARY.name)
        .map((page, index) => (
          <NavLink page={PAGE_NAMES[page]} handlePageChange={setPage} key={index} />
        ))}
    </nav>
  );
}
