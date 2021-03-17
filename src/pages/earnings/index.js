import React, { useState, useEffect } from "react"

import FlatList from "@/components/flatlist"
import styles from './index.module.css'
import { useHistory } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import moment from 'moment-timezone'

import pointImg from '@/assets/point.png'
import wealthImg from './img/wealth.png'
import mapImg from '@/assets/map.png'
import btcImg from '@/assets/btc.png'

import { Width, Height } from "@/utils/client"

const Index = () => {

    useEffect(() => {
        // moment.tz.setDefault("Asia/Shanghai");
        // console.log(moment)
        // console.log(window.USERIP);
    }, [])

    const { t } = useTranslation()
    const { push } = useHistory()
    const [index, setIndex] = useState(0)

    const Header = () => {
        return <div className={styles.flexView}
            style={{ justifyContent: 'flex-start' }}>
            <div onClick={() => {
                setIndex(0)
            }}
                className={styles.blockView}
                style={{
                    background: index == 0 ? "#fff" : 'rgba(255,255,255,.3)'
                }}>
                <p className={styles.blockText}
                    style={{
                        color: index == 0 ? '#626D7E' : '#fff',
                        fontWeight: index == 0 ? 500 : 400
                    }}>{t('质押概览')}</p>
            </div>
            <div onClick={() => {
                setIndex(1)
            }}
                className={styles.blockView}
                style={{
                    marginLeft: 10,
                    background: index == 1 ? "#fff" : 'rgba(255,255,255,.3)',
                }}>
                <p className={styles.blockText}
                    style={{
                        color: index == 1 ? '#626D7E' : '#fff',
                        fontWeight: index == 1 ? 500 : 400
                    }}>{t('收益明细')}</p>
            </div>
        </div>
    }

    const Item = ({ index }) => {
        return <div className={styles.flatItem}>
            <div className={styles.item}>
                <div className={styles.flexView} style={{ justifyContent: 'flex-start' }}>
                    <img className={styles.btcImg} src={btcImg} />
                    <p className={styles.btct}>{index}---BTC</p>
                </div>
                <p className={styles.date}>01-29</p>
            </div>
            <div className={styles.item} style={{ justifyContent: 'flex-start' }}>
                <p className={styles.btc}>+2.38495932</p>
                <p className={styles.usd}>≈31,221.04 USD</p>
            </div>
        </div>
    }

    const Earning = () => {
        return <FlatList style={{
            with: Width - 24,
            height: Height > 700
                ? Height - 200
                : Height - 160,
            overflowY: 'scroll',
            marginTop: 20,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            background: '#fff'
        }}
            item={(item) => <Item index={index} key={index.toString()} />} />
    }

    const Pledge = () => {
        return <div className={styles.pledge} style={{
            width: Width - 24
        }}>
            <img className={styles.logoBg} src={wealthImg} />

            <div className={styles.marginView}>
                <div className={styles.flexRow}>
                    <img className={styles.btcLargeImg} src={btcImg} />
                    <p className={styles.btct} style={{ fontSize: 20 }}>BTC</p>
                </div>
                <p className={styles.meZy} >{t('我的质押')}</p>
                <div className={styles.flexRow} style={{ paddingTop: 10 }}>
                    <p className={styles.zyBtc} >20.00000000</p>
                    <p className={styles.zyUsd} >≈30,428.09 USD</p>
                </div>
            </div>

            <div className={styles.cardView}>
                <div className={styles.cardItem} >
                    <p className={styles.cardItemTile} >{t('24h收益')}</p>
                    <p className={styles.cardItemValue}>+1.58340524</p>
                    <p className={styles.usdt} >≈50,238.85 USD</p>
                </div>
                <div className={styles.cardItem} style={{ marginLeft: 10 }}>
                    <p className={styles.cardItemTile} >{t('本周收益')}</p>
                    <p className={styles.cardItemValue}>+1.58340524</p>
                    <p className={styles.usdt} >≈50,238.85 USD</p>
                </div>
            </div>

            <div className={styles.cardsView} >
                <div className={styles.cardItem} >
                    <p className={styles.cardItemTile} >{t('本月收益')}</p>
                    <p className={styles.cardItemValue}>+1.58340524</p>
                    <p className={styles.usdt}>≈50,238.85 USD</p>
                </div>
                <div className={styles.cardItem} style={{ marginLeft: 10 }}>
                    <p className={styles.cardItemTile} >{t('总收益')}</p>
                    <p className={styles.cardItemValue}>+1.58340524</p>
                    <p className={styles.usdt}>≈50,238.85 USD</p>
                </div>
            </div>

            <div className={styles.btnContainer}>
                <div className={styles.btnView}>
                    <p className={styles.btcValue} style={{ color: '#34B498' }}>{t('赎回')}</p>
                </div>
                <div className={styles.btnsView}>
                    <p className={styles.btcValue} >{t('质押')}</p>
                </div>
            </div>

        </div>
    }

    return <div className={styles.contaner} style={{ width: Width }}>

        <div className={styles.linearBg} />
        <img className={styles.mapBg} src={mapImg} />

        <div className={styles.content}>
            <Header />

            <div className={styles.flexView}
                onClick={() => {
                    push('businessHistory')
                }}
                style={{ justifyContent: 'flex-start', marginTop: 15 }}>
                <p className={styles.business} >查看交易记录</p>
                <img src={pointImg} className={styles.pointImg} />
            </div>

            {index
                ? <Earning />
                : <Pledge />}
        </div>
    </div>
}

export default Index

