import React from 'react';
import {useSettingsContext} from "../hooks/useSettingsContext";

export const ChildComponent = () => {
    const settings = useSettingsContext()
    return <div>{settings.volume}</div>
}