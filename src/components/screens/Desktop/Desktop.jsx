import { useState, useEffect } from 'react';
import STYLES from './Desktop.module.scss';
import Taskbar from './Taskbar';

import icon from './Taskbar/StartButton/images/icons/fallback.png';
import projectData from '../../../data/projectData.json';

import DesktopIcon from './DesktopIcon';
import Window from './Window';

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState({});

  useEffect(() => {
    const initialWindows = {};
    Object.entries(projectData).forEach((project) => {
      initialWindows[project.name] = false;
    });
    setOpenWindows(initialWindows);
  }, []);

  const openWindow = (project) => {
    if (openWindows[project]) return;
    setOpenWindows((prevState) => ({
      ...prevState,
      [project]: true,
    }));
  };

  const closeWindow = (project) => {
    setOpenWindows((prevState) => ({
      ...prevState,
      [project]: false,
    }));
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

      {Object.keys(openWindows).map(
        (project) =>
          openWindows[project] && (
            <Window
              key={project}
              project={projectData[project]}
              onClose={() => closeWindow(project)}
            />
          )
      )}
      <Taskbar />
    </div>
  );
};

export default Desktop;
