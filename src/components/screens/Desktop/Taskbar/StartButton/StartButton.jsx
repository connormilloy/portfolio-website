import { useState } from 'react';
import STYLES from './StartButton.module.scss';

import startMenuButtonOpen from './images/menuOpen.png';
import startMenuButtonClosed from './images/menuClosed.png';

const StartButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={STYLES.StartButton} onClick={() => setMenuOpen(!menuOpen)}>
      <img
        className={STYLES.StartButton__image}
        src={menuOpen ? startMenuButtonOpen : startMenuButtonClosed}
        alt="Start Button"
      />
    </div>
  );
};

export default StartButton;
