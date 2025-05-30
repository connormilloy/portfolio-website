import { useState } from 'react';
import BootScreen from './components/screens/BootScreen';
import Desktop from './components/screens/Desktop';
import './App.scss'; // Import global styles

const App = () => {
  const [showBootScreen, setShowBootScreen] = useState(true);
  const handleDismissBootScreen = () => {
    setShowBootScreen(false);
  };

  return (
    <div className="App">
      {showBootScreen ? (
        <BootScreen onDismiss={handleDismissBootScreen} />
      ) : (
        <Desktop />
      )}
    </div>
  );
};

export default App;
