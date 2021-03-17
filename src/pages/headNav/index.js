import React, { useEffect, useState } from 'react'
import styles from './index.module.css'

import drawImg from './img/draw.png'
import { useHistory } from "react-router-dom"
import EventAggregator from "@/EventAggregator.js"

const Index = ({ onDock }) => {

    const { push, replace } = useHistory()

    const [y, setY] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', e => {
            if (!e.srcElement.scrollingElement) return
            // console.log(e.srcElement.scrollingElement)
            const y = e.srcElement.scrollingElement.scrollTop
            // 距离滚动条顶部高度
            if (y > 88) return
            setY(y)
        }, true)
    }, [])

    useEffect(() => {
        var scrollEvent = EventAggregator.on('scroll', scrollTop => {
            if (scrollTop > 88) return
            setY(scrollTop)
        })
        return () => {
            EventAggregator.off(scrollEvent)
        }
    }, [])

    return <div className={styles.contaner}
        style={{
            background: y > 0
                ? `rgba(52, 180, 152,${y <= 44
                    ? (y / 88) : 1})`
                : 'rgba(0, 0, 0, 0)'
        }}
    >
        <div className={styles.left_icon}>
            <img onClick={() => {
                onDock()
            }} className={styles.icon} src={drawImg} />
            <div className={styles.toHome} onClick={() => {
                replace('/home')
            }} />
            {/* <img style={{ marginLeft: 20, width: 30, height: 30 }} src={drawImg} /> */}
        </div>
        <div onClick={() => {
            replace('/home/spot')
            // global.C_Toast?.current?.Show('2123564')
        }}
            className={styles.flexView}>
            <p className={styles.wealth}>资产</p>
        </div>
    </div>
}

export default Index


