import React, { forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react'
import Animated from 'animated/lib/targets/react-dom'
import { Height } from "@/utils/client"

export default forwardRef(({ zIndex }, drawerRef) => {

    useImperativeHandle(drawerRef, () => ({
        Show,
        Hide
    }), [])

    const bottom = useRef(new Animated.Value(0)).current

    const showAnim = useRef(Animated.timing(bottom, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
    })).current

    const hideAnim = useRef(Animated.timing(bottom, {
        toValue: Height,
        duration: 200,
        useNativeDriver: true
    })).current

    const [visible, setVisible] = useState(false)
    const [height, setHeight] = useState(0)
    const [children, setChildren] = useState(<div />)

    useEffect(() => {
        if (!visible) {
            bottom.setValue(0)
        }
    }, [visible])

    const Show = data => {
        setVisible(true)
        if (data) {
            if (data.height) {
                setHeight(data.height)
                bottom.setValue(2 * data.height)
            }
            if (data.children) setChildren(data.children)
        }
        showAnim.start()
    }

    const Hide = () => {
        hideAnim.start(() => {
            setVisible(false)
        })
    }

    return visible ? <div style={{
        position: 'absolute', left: 0,
        right: 0, bottom: 0, top: 0,
        zIndex
    }}>

        <div onClick={() => void setVisible(false)}
            style={{
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,.5)'
            }} />

        <Animated.div style={{
            height,
            position: 'absolute',
            left: 0, bottom: 0,
            width: '100%',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            transform: [{ translateY: bottom }]
        }}>
            {children}
        </Animated.div>
    </div> : null
})

