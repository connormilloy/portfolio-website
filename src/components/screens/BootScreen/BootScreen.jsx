import STYLES from './BootScreen.module.scss';

const BootScreen = ({ onDismiss }) => {
  return (
    <div
      className={STYLES.BootScreen}
      onKeyDown={() => console.log('key pressed')}
      onClick={onDismiss}
    >
      <div className={STYLES.BootScreen__content}>
        <span>C:\>milloy.dev</span>
        <span className={STYLES.BlinkingCursor}>
          Press any key to continue...
        </span>
      </div>
    </div>
  );
};

export default BootScreen;
