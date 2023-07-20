import s from './header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>React trello</h1>
    </header>
  );
};

export default Header;
