export const LocalStorageKey = {
  theme: "theme",
  preferences: "preferences"
} as const;

export type LocalStorageKey =
  (typeof LocalStorageKey)[keyof typeof LocalStorageKey];

export const useLocalStorage = () => {
  const getItem = (key: LocalStorageKey | string) => {
    const value = localStorage?.getItem(key) || null;
    if (value === "undefined" || value === null) {
      return null;
    }

    return JSON.parse(value);
  };
  const setItem = (
    key: LocalStorageKey | string,
    value: string | string[] | number | boolean | object
  ) => {
    const serializedValue = JSON.stringify(value);
    return localStorage.setItem(key, serializedValue);
  };
  const removeItem = (key: LocalStorageKey | string) => {
    return localStorage.removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem
  };
};
