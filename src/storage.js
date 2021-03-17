const storage = {
    getStorage: async key => {
        const value = await localStorage.getItem(key) || '{}'
        return JSON.parse(value) || {}
    },
    setStorage: async (key, v) => {
        const value = await localStorage.getItem(key) || '{}'
        let newValue = JSON.parse(value) || {}
        localStorage.setItem(key, JSON.stringify({ ...newValue, ...v }))
    },
    removeStorage: key => {
        localStorage.removeItem(key)
    }
}

export default storage
