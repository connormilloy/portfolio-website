import STYLES from './DesktopIcon.module.scss';
const DesktopIcon = ({ icon, label, altText, onClick }) => {
  return (
    <div className={STYLES.DesktopIcon} onClick={onClick}>
      <img src={icon} alt={altText} className={STYLES.DesktopIcon__image} />
      <span className={STYLES.DesktopIcon__label}>{label}</span>
    </div>
  );
};

export default DesktopIcon;
