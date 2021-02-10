import { useState } from "react"

export  const useLocalStorage = (key, initialValue) => {
    // To retrieve anb item from localStorage, call localStorage.getItem('itemName)
    // If that item doesn't exist, it will return undefined
const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    const setValue = value => {
        // Save State
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    // Parse and return stored JSON, or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
})

return [storedValue]
}
//MAYBE RETURN SETVALUE?!?!