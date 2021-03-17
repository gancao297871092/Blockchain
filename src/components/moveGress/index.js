import React, { useState, useEffect } from "react"
import styles from './index.module.css'
import { Width } from "@/utils/client"

const Index = () => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        document.getElementById("move").addEventListener("touchmove", function (e) {
            var x = e.touches[0].pageX
            setIndex(parseInt((x / ((Width - 24 - 40) / 4))))
        })
    }, [])

    return <div id='move' className={styles.flexView} >
        <div onClick={() => {
            setIndex(1)
        }} className={styles.gress} style={{ marginLeft: 0 }}>
            <div className={styles.gressView} style={{ background: index > 0 ? '#A8F5E4' : '#F6F6F6' }}>
            </div>
            <p className={styles.gressT}>20%</p>
        </div>
        <div onClick={() => {
            setIndex(2)
        }} className={styles.gress} >
            <div className={styles.gressView} style={{ background: index > 1 ? '#88E8D3' : '#F6F6F6' }}>
            </div>
            <p className={styles.gressT}>20%</p>
        </div>
        <div onClick={() => {
            setIndex(3)
        }} className={styles.gress} >
            <div className={styles.gressView} style={{ background: index > 2 ? '#65C7B1' : '#F6F6F6' }}>
            </div>
            <p className={styles.gressT}>20%</p>
        </div>
        <div onClick={() => {
            setIndex(4)
        }} className={styles.gress} >
            <div className={styles.gressView} style={{ background: index > 3 ? '#34B498' : '#F6F6F6' }}>
            </div>
            <p className={styles.gressT}>20%</p>
        </div>
    </div>
}

export default Index