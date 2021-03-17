import React, { forwardRef, useImperativeHandle, useState, useRef } from 'react'
import Animated from 'animated/lib/targets/react-dom'
import { Width } from "@/utils/client"
import loseImg from './img/lose.png'

export default forwardRef(({ zIndex }, ref) => {

    var timer = null
    const animate = useRef(new Animated.Value(0)).current

    const showAnim = useRef(Animated.timing(animate, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true
    })).current

    useImperativeHandle(ref, () => ({
        Show
    }), [])

    const [visible, setVisible] = useState(false)
    const [text, setText] = useState('')

    const Show = text => {
        clearTimeout(timer)
        animate.setValue(0)
        setVisible(true)
        setText(text)
        showAnim.start(() => {
            timer = setTimeout(() => {
                setVisible(false)
                setText('')
                clearTimeout(timer)
            }, 1500)
        })
    }

    return visible ? <div style={{
        position: 'absolute',
        width: Width,
        height: 44,
        top: 54,
        display: 'flex',
        justifyContent: 'center',
        zIndex,
        overflow: 'hidden'
    }}>
        <Animated.div style={{
            position: 'fixed',
            width: Width - 24,
            height: 44,
            background: '#fff',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0px 0px 30px 0px rgba(21, 48, 101, 0.08)',
            top: 10,
            transform: [{
                translateY: animate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 44]
                })
            }]
        }}>
            <img src={loseImg} style={{ width: 18, height: 18, marginLeft: 10 }} />
            <p style={{
                color: '#FF2727',
                fontWeight: '400',
                fontSize: 14,
                marginLeft: 10
            }}>{text}</p>
        </Animated.div>
    </div> : null
})

