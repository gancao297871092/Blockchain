// @ 质押成功页面
import React, { useState } from "react"
import styles from './index.module.css'
import { useHistory } from "react-router-dom"
import { useTranslation } from 'react-i18next'

import pointImg from '@/assets/point.png'
import wealthImg from './img/wealth.png'
import mapImg from '@/assets/map.png'
import btcImg from '@/assets/btc.png'
import successImg from './img/success.png'
import btnImg from './img/btc.png'
import btnImgBlue from './img/btcBlue.png'
import backImg from './img/back.png'
import closeImg from './img/close.png'
import questionIcon from './img/question.png'
import { Width } from "@/utils/client"

const Index = () => {
    const { t } = useTranslation()
    const { goBack } = useHistory()
    const [index, setIndex] = useState(0)

    // 卡片内容
    const CardContentPledge = () => {
        return (
            <div className={styles.cardContent}>
                <div className={styles.imgContainer}>
                    <img src={successImg} alt="" />
                </div>
                <div className={styles.redemptionSuccess}>质押成功</div>
                <div className={styles.moneyCount}>1.37482094</div>

                <div className={styles.iconContainer}>
                    <div className={styles.iconImg}>
                        <img src={btnImg} alt="" />
                    </div>
                    <div className={styles.iconText}>
                        BTC
                </div>
                </div>
                <div className={styles.timeContainer}>
                    {/* 获取当前的时间 */}
             1-29 12:09:23
            </div>
            </div>
        )
    }

    const CardContentRedemption = () => {
        return (
            <div className={styles.cardContent}>
                <div className={styles.imgContainer}>
                    <img src={successImg} alt="" />
                </div>
                <div className={styles.redemptionSuccess}>赎回成功</div>
                <div className={styles.moneyCount}>1.37482094</div>

                <div className={styles.iconContainer}>
                    <div className={styles.iconImg}>
                        <img src={btnImgBlue} alt="" />
                    </div>
                    <div className={styles.iconText}>
                        ETH
                </div>
                </div>
                <div className={styles.serviceCount}>
                    服务费: 0.0000005
            </div>
                <div className={styles.timeContainer1}>
                    {/* 获取当前的时间 */}
             1-29 12:09:23
            </div>
            </div>
        )
    }

    const Card = () => {
        return <div className={styles.card} style={{ marginTop: 20, flex: 1, paddingBottom: 20 }}>
            {false ? <CardContentRedemption /> : <CardContentPledge />}
        </div>
    }

    const Children = () => {
        return (
            <div className={styles.modal}>
                <div className={styles.closeImg} onClick={() => {
                    global.C_Model?.current?.Hide()
                }}>

                    <img src={closeImg} alt="" />
                </div>
                <div className={styles.questionIcon}>
                    <img src={questionIcon} alt="" />
                </div>
                <div className={styles.isSureShuHui}>
                    确定要赎回吗?
                </div>
                <div className={styles.notice}>
                    再质押24h收益可达0.34728459,考虑一下吧~
                </div>
                <div className={styles.btn}>
                    <div className={styles.btnText}>
                        狠心赎回
                   </div>
                </div>
            </div>
        )
    }


    return <div className={styles.contaner} style={{ width: Width }}>
        <div className={styles.linearBg} />
        <img className={styles.mapBg} src={mapImg} />

        <div className={styles.content}>
            <div className={styles.back} onClick={()=>goBack()} >
                <img src={backImg} alt="" />
            </div>
            <div className={styles.cardContainer}>
                <Card />
            </div>
        </div>
    </div>
}

export default Index