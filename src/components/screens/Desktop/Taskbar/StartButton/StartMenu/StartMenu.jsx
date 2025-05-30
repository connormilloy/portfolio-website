import STYLES from './StartMenu.module.scss';
import MenuItem from './MenuItem';
const StartMenu = () => {
  return (
    <div className={STYLES.StartMenu}>
      <div className={STYLES.StartMenu__VerticalBar}>
        <span>milloy.dev</span>
      </div>
      <div className={STYLES.StartMenu__MenuItems}>
        <MenuItem text={'a menu item'} />
        <MenuItem text={'a menu item'} />
        <MenuItem text={'a menu item'} />
      </div>
    </div>
  );
};

export default StartMenu;
