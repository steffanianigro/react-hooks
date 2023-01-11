import React from 'react';
import './App.css';
import {useLocalStorage} from "./useLocalStorage";
import {useSettingsContext} from "./useSettingsContext";
import {Settings} from "./types/Settings";

const SettingsContext = React.createContext<Settings | null>(null);

function App() {

  const [settingsContext, setVolume, setCurrentSong, setAnalyticsOn] = useSettingsContext({
    volume: 1,
    currentSong: "Cool Song",
    analyticsOn: true
  });

  return (
      <SettingsContext.Provider value={settingsContext}>
        <div className="App">
          <header className="App-header">
            <p>
              {settingsContext.volume}.
            </p>
            <button onClick={(e) => setVolume(Math.random())}>Delete Row</button>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </SettingsContext.Provider>
  );
}

export default App;
