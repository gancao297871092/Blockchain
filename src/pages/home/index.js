import React, { useEffect } from "react"
import styles from './index.module.css'
import { useHistory } from "react-router-dom"
import { useTranslation } from 'react-i18next'

import mapImg from '@/assets/map.png'
import zhangImg from './img/zhang.png'
import btcImg from './img/btc.png'
// import ethImg from './img/eth.png'
// import usdtImg from './img/usdt.png'
import rightImg from './img/right.png'
import { Width } from "@/utils/client"
import getUserIp from "@/utils/getUserIp"

const Index = () => {

    useEffect(() => {
        if (!window.USERIP) getUserIp()
    }, [])

    const { t } = useTranslation()
    const { push } = useHistory()

    const Card = () => {
        return <div className={styles.card} style={{ marginTop: 20, flex: 1, paddingBottom: 20 }}>
            <div className={styles.flexView}
                style={{ paddingTop: 20, paddingBottom: 20 }}>
                <img className={styles.icon} src={btcImg} />
                <p className={styles.btc}>BTC</p>
                <p className={styles.btcValue}>≈50,238.85 USD</p>
            </div>
            <div className={styles.flexView} style={{ flex: 1, height: 80, marginRight: 12 }}>
                <div className={styles.cardItem}>
                    <p className={styles.cardItemTile} >{t('平台累计质押')}</p>
                    <p className={styles.cardItemValue}>1299.20393099</p>
                </div>
                <div className={styles.cardItem} style={{ marginLeft: 10 }}>
                    <p className={styles.cardItemTile} >{t('累计产生收益')}</p>
                    <p className={styles.cardItemValue}>3824.38920463</p>
                </div>
            </div>
            <div className={styles.flexView} style={{ flex: 1, height: 80, marginRight: 12, marginTop: 10 }}>
                <div className={styles.cardItem}>
                    <p className={styles.cardItemTile} >{t('月利率')}</p>
                    <p className={styles.cardItemValue}>10%</p>
                </div>
                <div className={styles.cardItem} style={{ marginLeft: 10 }}>
                    <p className={styles.cardItemTile} >{t('年利率')}</p>
                    <div className={styles.flexView} style={{ marginTop: 10 }}>
                        <p className={styles.cardItemValue} style={{ color: '#24D895', marginTop: 0 }}>45%</p>
                        <img style={{ width: 16, height: 16 }} src={zhangImg} />
                    </div>
                </div>
            </div>
            <div className={styles.flexView}
                onClick={() => {
                    push('home/earnings')
                }}
                style={{
                    flex: 1, height: 50,
                    marginTop: 10, marginRight: 12,
                    borderRadius: 4,
                    border: '1px solid #b5bbc8',
                    justifyContent: 'space-between'
                }}>
                <p className={styles.btcValue} style={{ color: '#9099A9' }}>{t('我的质押')}</p>
                <div className={styles.flexView} style={{ marginRight: 10 }}>
                    <p className={styles.cardItemValue} style={{ marginTop: 0, marginRight: 5 }}>29.203999</p>
                    <img style={{ width: 14, height: 14 }} src={rightImg} />
                </div>
            </div>
            <div className={styles.flexView}
                style={{
                    flex: 1, height: 50,
                    marginTop: 10, marginRight: 12,
                    borderRadius: 4,
                    border: '1px solid #b5bbc8',
                    justifyContent: 'space-between'
                }}>
                <p className={styles.btcValue} style={{ color: '#9099A9' }}>{t('24h收益')}</p>
                <p className={styles.cardItemValue}
                    style={{ marginTop: 0, marginRight: 10, color: '#FF2727' }}>- 30592.23</p>
            </div>
            <div className={styles.flexView}
                style={{
                    flex: 1, height: 44,
                    marginTop: 20, marginRight: 12,
                    justifyContent: 'space-between'
                }}>
                <div className={styles.flexView}
                    onClick={() => {
                        push('home/pledge')
                    }}
                    style={{
                        flex: 1, height: 44,
                        marginLeft: 0,
                        justifyContent: 'center',
                        borderRadius: 4,
                        border: '1px solid #34B498'
                    }}>
                    <p className={styles.btcValue} style={{ color: '#34B498', marginLeft: 0 }}>{t('赎回')}</p>
                </div>
                <div onClick={() => {
                    push('home/pledge')
                }}
                    className={styles.flexView}
                    style={{
                        flex: 1, height: 44,
                        justifyContent: 'center',
                        borderRadius: 4,
                        background: '#34B498'
                    }}>
                    <p className={styles.btcValue} style={{ color: '#FFFFFF', marginLeft: 0 }}>{t('质押')}</p>
                </div>
            </div>
        </div>
    }

    return <div className={styles.contaner} style={{ width: Width }}>

        <div className={styles.linearBg} />
        <img className={styles.mapBg} src={mapImg} />

        <div id='body'
            onScroll={() => {
                console.log(1)
            }}
            className={styles.content}>
            <p className={styles.title}>{t('让利润奔跑起来')}</p>
            <p className={styles.text}>{t('过去24H质押人数')} 9034 人</p>
            <Card />
            <Card />
            <Card />
        </div>
    </div>
}

export default Index

