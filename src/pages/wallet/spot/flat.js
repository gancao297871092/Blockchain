import React from "react"
import FlatList from "@/components/flatlist"
import styles from './index.module.css'

import btcImg from '@/assets/btc.png'
import { Height } from "@/utils/client"

const Index = ({ currentType, type }) => {
    return currentType == type ? <FlatList style={{
        with: '100%', background: '#fff',
        height: Height > 700
            ? Height - 380
            : Height - 300,
        overflowY: 'scroll'
    }}
        item={(item) => <div className={styles.itemView}>
            <div className={styles.btcView}>
                <img className={styles.itemBtc} src={btcImg} />
                <p className={styles.itemBtcT}>BTC{item}{type}</p>
            </div>
            <div className={styles.valueView}>
                <p className={styles.value}>0.10935900</p>
                <p className={styles.values}>≈10,193.09 USD</p>
            </div>
        </div>} />
        : null
}

export default Index