import React from 'react';
import {useSettingsContext} from "../hooks/useSettingsContext";

export const Display = () => {
    const settings = useSettingsContext()
    return (
        <div className="card">
            <header>DISPLAY</header>
            <div>{settings.analyticsOn.toString()}</div>
            <div>{settings.volume}</div>
            <div>{settings.currentSong}</div>
        </div>
    )
}