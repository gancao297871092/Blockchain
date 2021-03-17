import React from "react"

import styles from './index.module.css'
import { useHistory } from "react-router-dom"
// import { useTranslation } from 'react-i18next'

import mapImg from '@/assets/map.png'
import banImg from '@/assets/ban.png'

import { Width } from "@/utils/client"

const Index = () => {

    const { replace, push } = useHistory()

    return <div className={styles.contaner} style={{ width: Width, minHeight: 375 }}>
        <div className={styles.linearBg} />
        <img className={styles.mapBg} src={mapImg} style={{ width: Width }} />

        <div className={styles.content}>
            <img src={banImg} className={styles.headImg} />
            <p className={styles.phone}>189****2356</p>
            <p className={styles.id}>ID:385932</p>

            <div className={styles.card}>
                <div className={styles.banBtn}
                    onClick={() => {
                        push('ban')
                    }}>
                    <img src={banImg} className={styles.banImg} />
                    <p className={styles.banText}>禁用此账户</p>
                </div>
                <div onClick={() => {
                    replace('/home')
                }} className={styles.outBtn}>
                    <p className={styles.outText}>退出登录</p>
                </div>
            </div>
        </div>
    </div>
}

export default Index

