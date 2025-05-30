import { useState, useEffect } from 'react';
import STYLES from './Desktop.module.scss';
import Taskbar from './Taskbar';

import icon from './Taskbar/StartButton/images/icons/fallback.png';
import projectData from '../../../data/projectData.json';

import DesktopIcon from './DesktopIcon';
import Window from './Window';

const Desktop = () => {
  const [windowOpen, setWindowOpen] = useState(false);
  const [activeProject, setActiveProject] = useState('');

  const openWindow = (project) => {
    setWindowOpen(true);
    setActiveProject(project);
  };

  const closeWindow = () => {
    setWindowOpen(false);
    setActiveProject('');
  };

  return (
    <div className={STYLES.Desktop}>
      <div className={STYLES.Desktop__icons}>
        {Object.entries(projectData).map(([key]) => (
          <DesktopIcon
            key={key}
            icon={icon}
            label={key}
            altText={`${key} icon`}
            onClick={() => openWindow(key)}
          />
        ))}
      </div>

      {windowOpen && (
        <Window
          project={projectData[activeProject]}
          onClose={() => closeWindow()}
        />
      )}

      <Taskbar />
    </div>
  );
};

export default Desktop;
