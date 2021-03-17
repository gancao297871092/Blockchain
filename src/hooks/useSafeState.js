import { useState, useEffect, useRef, useCallback } from "react"

export default initialState => {
    //缓存原始useState
    var _useState = useState(initialState)
    var state = _useState[0]
    var setState = _useState[1]
    //ref是否已经被卸载
    var mounted = useRef(true)

    useEffect(() => () => void (mounted.current = false), [])

    var setSafeState = useCallback(data => void (mounted.current && setState(data)), [])

    return [state, setSafeState]
}