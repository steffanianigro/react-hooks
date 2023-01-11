import React, {ReactNode} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {SettingsContext} from "../context/SettingsContext";

export const SettingsContextProvider = ({ children }: { children?: ReactNode }) => {

    const [volume, setVolume] = useLocalStorage<number>("volume", 1);
    const [currentSong, setCurrentSong] = useLocalStorage<string>("currentSong", "Cool Song");
    const [analyticsOn, setAnalyticsOn] = useLocalStorage<boolean>("analyticsOn", true);

    return (
        <SettingsContext.Provider value={{
            volume,
            currentSong,
            analyticsOn,
            setVolume,
            setCurrentSong,
            setAnalyticsOn
        }}>
            {children}
        </SettingsContext.Provider>
    )
}