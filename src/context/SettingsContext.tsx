import React from "react";
import {Settings} from "../types/Settings";

export const SettingsContext = React.createContext<Settings | null>(null);