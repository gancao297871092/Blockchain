import React, { useState, useEffect } from "react"

import styles from './index.module.css'
import { useHistory } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import MoveGress from '@/components/moveGress'

import mapImg from '@/assets/map.png'
import ethImg from '@/assets/eth.png'
import grayPointImg from '@/assets/grayPoint.png'
import btnBgImg from './img/btnBg.png'
import btcvImg from './img/btcv.png'
import sanImg from './img/san.png'
import { Width } from "@/utils/client"

const Index = () => {

    // const { t } = useTranslation()
    const { push } = useHistory()

    return <div className={styles.contaner} style={{ width: Width }}>

        <div className={styles.linearBg} />
        <img className={styles.mapBg} src={mapImg} />

        <div className={styles.content}>

            <div className={styles.card} style={{ width: Width - 24, marginLeft: 12 }}>
                <img className={styles.btnBg} src={btnBgImg} />

                <div className={styles.cardCnntent}>
                    <div className={styles.flexView}>
                        <img className={styles.etcImg} src={ethImg} />
                        <p className={styles.ethText}>ETH</p>
                        <p className={styles.ethValue}>≈30,428.09 USD</p>
                    </div>
                    <div className={styles.flexView} style={{ marginTop: 10 }}>
                        <p className={styles.look}>查看交易记录</p>
                        <img className={styles.point} src={grayPointImg} />
                    </div>
                    <div className={styles.valueView} >
                        <img className={styles.btcv} src={btcvImg} />
                        <p className={styles.btct}>1.38593500</p>
                    </div>
                    <p className={styles.kyt}>可用：1.38596039</p>

                    <MoveGress />

                    <div className={styles.flexView} >
                        <div className={styles.flexView}
                            style={{ position: 'relative', justifyContent: 'center' }}>
                            <div className={styles.estimate} >
                                <p className={styles.estimateT}>收益预估</p>
                            </div>
                            <img src={sanImg} className={styles.sanImg} />
                        </div>
                    </div>
                    <div className={styles.bordView} >
                        <p className={styles.bordText}>24h利率20%</p>
                        <p className={styles.bordValue}>0.00%</p>
                    </div>
                    <div className={styles.bordView} >
                        <p className={styles.bordText}>24h利率20%</p>
                        <p className={styles.bordValue}>0.00%</p>
                    </div>
                    <div className={styles.bordView} >
                        <p className={styles.bordText}>24h利率20%</p>
                        <p className={styles.bordValue}>0.00%</p>
                    </div>
                    <div className={styles.btnView}
                        onClick={() => {
                            global.C_Dialog?.current?.Show({
                                title: '赎回ETC 0.00003958',
                                content: '本次赎回将收取服务费0.00000009 （本次收益的20%）',
                                btnText: '确认赎回',
                                callBack: () => {
                                    push('success')
                                }
                            })
                        }}>
                        <p className={styles.btnText}>确定质押</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
}

export default Index

