export const setLocalStorage = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <T>(key: string): T | null => {
  const getSavedValue = localStorage.getItem(key);
  if (getSavedValue === null) return null;
  
  try {
    return JSON.parse(getSavedValue);
  } catch {
    return null;
  }
};

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

export const removeAllFromLocalStorage = () => {
  localStorage.clear();
};
