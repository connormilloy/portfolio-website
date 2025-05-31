import STYLES from './StartMenu.module.scss';
import MenuItem from './MenuItem';
const StartMenu = () => {
  return (
    <div className={STYLES.StartMenu}>
      <div className={STYLES.StartMenu__VerticalBar}>
        <span>milloy.dev</span>
      </div>
      <div className={STYLES.StartMenu__MenuItems}>
        <MenuItem
          text={'LinkedIn 🔗'}
          href="https://uk.linkedin.com/in/connor-milloy-0570a4207"
        />
        <MenuItem text={'Github 🔗'} href="https://github.com/connormilloy" />
        <MenuItem text={'Contact Me 🔗'} href="mailto:connor@milloy.dev" />
      </div>
    </div>
  );
};

export default StartMenu;
