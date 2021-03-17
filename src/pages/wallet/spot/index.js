import React, { useState } from "react"

import styles from './index.module.css'
import { useHistory } from "react-router-dom"
// import { useTranslation } from 'react-i18next'
import FlatList from "./flat"

import mapImg from '@/assets/map.png'
import btcImg from '@/assets/btc.png'
import grayPointmg from '@/assets/grayPoint.png'

const Index = () => {

    const { push } = useHistory()

    const [type, setType] = useState('spot')

    const Header = () => {
        return <div className={styles.cardContent} >
            <div className={styles.totalTView} >
                <p className={styles.totalTitle} >Total assets converted</p>
                <img className={styles.btcImg} src={btcImg} />
                <p className={styles.btcT} >BTC</p>
            </div>
            <div className={styles.valueView} >
                <p className={styles.valueText} >20.00000000</p>
                <p className={styles.valueT} >≈30,428.09 USD</p>
            </div>
            <div className={styles.linkView} onClick={() => {
                push("rechargeHistory");
            }}>
                <p className={styles.linkText} >Transaction Record</p>
                <img className={styles.linkImg} src={grayPointmg} />
            </div>
            <div className={styles.btnBody} >
                <div className={styles.btnLeftView} onClick={() => {
                    push('withdrawal')
                }} >
                    <p className={styles.btnLeftText} >Withdraw</p>
                </div>
                <div className={styles.btnRightView} onClick={() => {
                    push('topUp')
                }}>
                    <p className={styles.btnRightText} >Recharge</p>
                </div>
            </div>
            <div className={styles.navView} >
                <div className={styles.navLeftView}
                    style={{ borderColor: type == 'spot' ? '#34B498' : 'transparent' }}
                    onClick={() => {
                        if (type == 'spot') return
                        setType('spot')
                    }}>
                    <p className={styles.btnLeftText} style={{ color: type == 'spot' ? '#34B498' : '#aaa' }}>Spot</p>
                </div>
                <div className={styles.navRightView}
                    style={{ borderColor: type == 'contract' ? '#34B498' : 'transparent' }}
                    onClick={() => {
                        if (type == 'contract') return
                        setType('contract')
                    }}>
                    <p className={styles.btnRightText} style={{ color: type == 'contract' ? '#34B498' : '#aaa' }}>Contract</p>
                </div>
            </div>
        </div>
    }

    return <div style={{ flex: 1, position: 'relative', background: '#fff' }}>

        <div className={styles.linearBg} />
        <img className={styles.mapBg} src={mapImg} />

        <div className={styles.content}>
            <Header />
            <FlatList type='spot' currentType={type} />
            <FlatList type='contract' currentType={type} />
        </div>
    </div>
}


export default Index

