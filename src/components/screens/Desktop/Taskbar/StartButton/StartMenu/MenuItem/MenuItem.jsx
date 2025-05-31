import STYLES from './MenuItem.module.scss';
import fallbackIcon from '../../images/icons/fallback.png';
const MenuItem = ({ text, icon, href }) => {
  return (
    <a href={href} target="_blank" className={STYLES.MenuItem}>
      {!icon && <img src={fallbackIcon} />}
      <span className={STYLES.MenuItem__name}>{text}</span>
    </a>
  );
};

export default MenuItem;
