import STYLES from './Desktop.module.scss';
import Taskbar from './Taskbar';

const Desktop = () => {
  return (
    <div className={STYLES.Desktop}>
      <Taskbar />
    </div>
  );
};

export default Desktop;
