import React from "react";
import {useSettingsContext} from "../hooks/useSettingsContext";

export const Control = () => {
    const settings = useSettingsContext();
    return (
        <div className="card">
            <header>CONTROL</header>
            <div>
                <label>
                    Analytics On
                    <input
                        type="checkbox"
                        checked={settings.analyticsOn}
                        onChange={() => {
                            settings.setAnalyticsOn((prev) => !prev)
                        }}
                    />
                </label>
            </div>
            <div>
                <label>
                    Volume
                    <input
                        type="range"
                        min="0.1"
                        max="1.0"
                        step="0.01"
                        value={settings.volume}
                        onChange={(event: React.FormEvent<HTMLInputElement>) => {
                            settings.setVolume(parseFloat(event.currentTarget.value))
                        }}
                    />
                </label>
            </div>
            <div>
                <label>
                    Current Song
                    <input
                        type="text"
                        value={settings.currentSong}
                        onChange={(event: React.FormEvent<HTMLInputElement>) => {
                            settings.setCurrentSong(event.currentTarget.value)
                        }}
                    />
                </label>
            </div>
        </div>
    )
}