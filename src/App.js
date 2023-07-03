import { useState, useEffect } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";

// Hooks
import useWindowSize from "./hooks/useWindowSize";

function App() {

  const windowSize = useWindowSize();
  
  
  

  const [currentTheme, setCurrentTheme] = useState(windowSize > 500 ? localStorage.getItem('currentTheme') || 'light' : 'light');

  useEffect(() => {
    localStorage.setItem('currentTheme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    if(windowSize < 500) {
      setCurrentTheme('light');
    };
  }, [windowSize]);

  

  return (
    <div className="App" style={{
      backgroundColor: currentTheme === "light" ? "white" : "black"
    }}>
      {
        windowSize > 500 ? (
          <ThemeSwitcher changeTheme={setCurrentTheme} />
        ) : null
      }
    </div>
  );
}

export default App;
