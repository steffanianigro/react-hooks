import {Settings} from "../types/Settings";

import React, { useContext } from 'react'
import {SettingsContext} from "../context/SettingsContext";

export const useSettingsContext = (): Settings => {
    const settings = useContext(SettingsContext);
    if(settings === null){
        throw Error("Settings has been used outside of Context.")
    }
    return settings;
}