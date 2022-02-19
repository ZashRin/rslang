import React, { Fragment, useContext } from 'react';
import Modal from 'react-modal';
import './styles.css';
import { NavMenu } from '../Header/HeaderNav';
import { LoginForm } from '../LoginForm/LoginForm';
import { Context } from '../../Context/Context';
import { clearStorage } from '../../utils/storage';

Modal.setAppElement('#root');

export function Header() {
  const [context, setContext] = useContext(Context);

  function openModal() {
    setContext({ ...context, modalIsOpen: true });
  }
  function closeModal() {
    setContext({ ...context, modalIsOpen: false });
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  function logOut() {
    clearStorage();
    setContext({ ...context, id: null, token: null, name: null, authenticated: false });
  }

  return (
    <>
      <header className="header">
        <div className="header_logo"></div>
        <NavMenu />
        {context.authenticated ? (
          <button className="autorisation" onClick={logOut}>
            <p className="login_text">Выйти</p>
          </button>
        ) : (
          <button className="autorisation" onClick={openModal}>
            <p className="login_text">Войти</p>
          </button>
        )}

        <Modal
          isOpen={context.modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <LoginForm />
        </Modal>
      </header>
    </>
  );
}
