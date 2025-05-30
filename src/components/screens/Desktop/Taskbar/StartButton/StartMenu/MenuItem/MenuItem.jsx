import STYLES from './MenuItem.module.scss';
import fallbackIcon from '../../images/icons/fallback.png';
const MenuItem = ({ text, icon }) => {
  return (
    <div className={STYLES.MenuItem}>
      {!icon && <img src={fallbackIcon} />}
      <span className={STYLES.MenuItem__name}>{text}</span>
    </div>
  );
};

export default MenuItem;
