import { useState } from 'react';
import STYLES from './StartButton.module.scss';

import startMenuButtonOpen from './images/menuOpen.png';
import startMenuButtonClosed from './images/menuClosed.png';

import StartMenu from './StartMenu';

const StartButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={STYLES.StartButton}>
      <img
        onClick={() => setMenuOpen(!menuOpen)}
        className={STYLES.StartButton__image}
        src={menuOpen ? startMenuButtonOpen : startMenuButtonClosed}
        alt="Start Button"
      />
      {menuOpen && <StartMenu />}
    </div>
  );
};

export default StartButton;
