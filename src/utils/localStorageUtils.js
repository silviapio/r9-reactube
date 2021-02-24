const syncWithLocalStorage = localStorageItem => {
    const localData = localStorage.getItem(localStorageItem);
    return localData ? JSON.parse(localData) : [];
}

export default syncWithLocalStorage;