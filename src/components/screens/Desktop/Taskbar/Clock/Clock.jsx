import STYLES from './Clock.module.scss';
const Clock = () => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return <div className={STYLES.Clock}>{currentTime}</div>;
};

export default Clock;
