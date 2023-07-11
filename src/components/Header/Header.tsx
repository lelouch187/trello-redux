import React, { FC } from 'react';
import s from './header.module.css';

const Header:FC = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>React trello</h1>
    </header>
  );
};

export default Header;
