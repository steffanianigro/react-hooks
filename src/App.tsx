import React, {useContext} from 'react';
import './App.css';
import {Display} from "./components/Display";
import {Control} from "./components/Control";
import {SettingsContextProvider} from "./context/SettingsContextProvider";

function App() {

  return (
      <SettingsContextProvider>
        <div className="app">
            <Control/>
            <Display/>
        </div>
      </SettingsContextProvider>
  );
}

export default App;
