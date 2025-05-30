import STYLES from './Desktop.module.scss';
import Taskbar from './Taskbar';

import icon from './Taskbar/StartButton/images/icons/fallback.png';
import DesktopIcon from './DesktopIcon/DesktopIcon.jsx';
const Desktop = () => {
  return (
    <div className={STYLES.Desktop}>
      <div className={STYLES.Desktop__icons}>
        <DesktopIcon
          icon={icon}
          label={'A project'}
          altText={'A project icon'}
          onClick={() => alert('A project clicked!')}
        />
        <DesktopIcon
          icon={icon}
          label={'A project'}
          altText={'A project icon'}
          onClick={() => alert('A project clicked!')}
        />
        <DesktopIcon
          icon={icon}
          label={'A project'}
          altText={'A project icon'}
          onClick={() => alert('A project clicked!')}
        />
      </div>
      <Taskbar />
    </div>
  );
};

export default Desktop;
