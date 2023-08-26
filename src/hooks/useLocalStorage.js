import React from "react";

//create the useLocalStorage hook

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || initialValue
  );

  const setLocalStorageValue = (value) => {
    if (value) localStorage.setItem(key, JSON.stringify(value));
    return value;
  };

  React.useEffect(() => {
    setLocalStorageValue(value);
    
    const refreshStorageFunc = (event) => {
      if (event.key === key) {
        setValue(event.newValue);
      }
    };
    window.addEventListener("storage", refreshStorageFunc);

    return () => {
      window.removeEventListener("storage", refreshStorageFunc);
    };
  }, [key]);
  return { value, setValue: setLocalStorageValue };
}

const ProfileContext = React.createContext()
export const ProfileProvider = ProfileContext.Provider

export const useProfile = () => {
    return React.useContext(ProfileContext)
}
