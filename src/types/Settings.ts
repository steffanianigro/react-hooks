import {Dispatch, SetStateAction} from "react";

export type Settings = {
    volume: number,
    currentSong: string,
    analyticsOn: boolean,
    setVolume: Dispatch<SetStateAction<number>>,
    setCurrentSong: Dispatch<SetStateAction<string>>,
    setAnalyticsOn: Dispatch<SetStateAction<boolean>>
}