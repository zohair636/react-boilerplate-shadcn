export const setLocalStorage = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key: string) => {
  const getSavedValue = localStorage.getItem(key)
  if (getSavedValue === null) return null
  return JSON.parse(getSavedValue)
}

export const removeLocalStorageStorageItem = (key: string) => {
  localStorage.removeItem(key)
}

export const removeAllFromLocalStorageStorage = () => {
  localStorage.clear()
}
