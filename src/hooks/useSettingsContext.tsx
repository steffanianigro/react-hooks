import {useState, useEffect, Dispatch, SetStateAction} from "react";
import {Settings} from "../types/Settings";
import {useLocalStorage} from "./useLocalStorage";

export const useSettingsContext = (defaultValue: Settings): [Settings, Dispatch<SetStateAction<number>>, Dispatch<SetStateAction<string>>, Dispatch<SetStateAction<boolean>>] => {

    const [volume, setVolume] = useLocalStorage<number>("volume", 1);
    const [currentSong, setCurrentSong] = useLocalStorage<string>("currentSong", "Cool Song");
    const [analyticsOn, setAnalyticsOn] = useLocalStorage<boolean>("analyticsOn", true);

    // Initialise settings context.
    const [settingsContext, setSettingsContext] = useState({
        volume,
        currentSong,
        analyticsOn
    });

    // Update settings context when any of the settings change.
    useEffect(() => {
        setSettingsContext({
            volume,
            currentSong,
            analyticsOn
        });
    }, [volume, currentSong, analyticsOn]);

    return [settingsContext, setVolume, setCurrentSong, setAnalyticsOn];
}