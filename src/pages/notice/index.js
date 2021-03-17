import React from "react"

import styles from './index.module.css'
import { useHistory } from "react-router-dom"
import FlatList from "@/components/flatlist"
// import { useTranslation } from 'react-i18next'
import mapImg from '@/assets/map.png'
import noticeImg from './img/notice.png'

import { Width, Height } from "@/utils/client"

const Index = () => {

    const { replace, push } = useHistory()

    return <div className={styles.contaner} style={{ width: Width }}>

        <div className={styles.linearBg} />
        <img className={styles.mapBg} src={mapImg} style={{ width: Width }} />

        <div className={styles.content}>
            <FlatList
                style={{
                    width: Width - 24,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    height: Height - 82,
                    background: '#fff'
                }}
                item={() => <div className={styles.itemView} >
                    <div className={styles.borderView} >
                        <img className={styles.noticeImg} src={noticeImg} />
                        <div className={styles.textView} >
                            <div className={styles.noticeView} >
                                <p className={styles.noticeText}>系统更新通知</p>
                                <p className={styles.timeText}>01-29</p>
                            </div>
                            <p className={styles.notice}>本app将在2021年3月12日进行在线更新版本，本次更新不影响在线交易。</p>
                        </div>
                    </div>
                </div>}
            />

        </div>
    </div>
}

export default Index

