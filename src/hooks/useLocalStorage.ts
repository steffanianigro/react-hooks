import {useState, useEffect, Dispatch, SetStateAction} from "react";

export const useLocalStorage = <T extends string | number | boolean>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] => {
    // Initialise value from local storage if exists.
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        let value: T = defaultValue;
        if(saved !== null){
            value = JSON.parse(saved);
        }
        return value;
    });

    // Update local storage when value changes (deps).
    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}