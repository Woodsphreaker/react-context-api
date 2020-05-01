const getStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export { getStorage, setStorage }
