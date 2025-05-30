import { useState, useEffect } from 'react';

import STYLES from './Window.module.scss';

const Window = ({ project, onClose }) => {
  const { name, description, imageUrl } = project;
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!imageUrl) {
      import('../../../../images/project1.png').then((image) =>
        setImage(image.default)
      );
    }
  }, []);

  if (!image) return null;

  return (
    <div className={STYLES.Window}>
      <div className={STYLES.Window__header}>
        <span className={STYLES.Window__title}>{name}</span>
        <button className={STYLES.Window__closeButton} onClick={onClose}>
          X
        </button>
      </div>
      <div className={STYLES.WindowContent}>
        <img src={image} className={STYLES.WindowContent__image} />
      </div>
    </div>
  );
};

export default Window;
