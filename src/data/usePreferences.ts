import { useEffect, useState } from "react";
import { LocalStorageKey, useLocalStorage } from "../hooks/useLocalStorage";
import { Preference } from "../types/Preference";

export const usePreference = () => {
  const { getItem, setItem, removeItem } = useLocalStorage();
  const [preferences, setPreferences] = useState<Preference[]>(
    getItem(LocalStorageKey.preferences) || []
  );

  useEffect(() => {
    setItem(LocalStorageKey.preferences, preferences);
  }, []);

  const clearPreferences = () => {
    removeItem(LocalStorageKey.preferences);
  };

  return {
    preferences,
    setPreferences,
    clearPreferences
  };
};
