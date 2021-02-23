const storage = {
    getUserStorage: async () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {}
        return userInfo
        // const value = await AsyncStorage.getItem('userStorage') || '{}'
        // setUserInfoStorage(JSON.parse(value)?.[touid] || {})
        // console.log(JSON.parse(value)[touid])
    },
    setUserStorage: async userInfo => {
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        // const value = await AsyncStorage.getItem('userStorage') || '{}'
        // const newValue = JSON.parse(value)
        // newValue[userInfo.uid] = userInfo
        // AsyncStorage.setItem('userStorage', JSON.stringify(newValue))
    },
    removeUserStorage: () => {
        // AsyncStorage.removeItem('userStorage')
    }
}

export default storage
