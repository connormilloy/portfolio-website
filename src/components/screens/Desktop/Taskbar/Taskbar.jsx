import STYLES from './Taskbar.module.scss';
import Clock from './Clock';
import StartButton from './StartButton';
const Taskbar = () => {
  return (
    <div className={STYLES.Taskbar}>
      <StartButton />
      <Clock />
    </div>
  );
};
export default Taskbar;
