import React, { useEffect } from 'react'
import Animated from 'animated/lib/targets/react-dom'
import { Link } from "react-router-dom"
import styles from './index.module.css'

import api from '@/network/api'
const { getLogin } = api

const Index = () => {

    const { Value, timing } = Animated
    const animatedValue = new Value(0)
    const a = { b: { c: '1' } }

    const animate = () => {
        timing(animatedValue, {
            toValue: 100,
            duration: 500
        }).start()
    }

    useEffect(() => {
        animate()
    }, [])

    return <Animated.div
        style={{ marginLeft: animatedValue }}
        className={styles.contaner}>
        <p>登录页</p>
        <Link to="/home/">登录</Link>
    </Animated.div>
}

export default Index


