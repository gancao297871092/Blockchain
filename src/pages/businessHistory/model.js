import React, { useRef, forwardRef, useImperativeHandle, useState } from "react"
import Animated from 'animated/lib/targets/react-dom'
import styles from './index.module.css'

const Index = forwardRef(({ type, currency, callBack }, ref) => {

    const [visible, setVisible] = useState(false)
    const [index, setIndex] = useState(0)

    const bottom = useRef(new Animated.Value(0)).current

    const showAnim = useRef(Animated.timing(bottom, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
    })).current

    const Show = (index = 0) => {
        setIndex(index)
        bottom.setValue(0)
        setVisible(true)
        showAnim.start()
    }

    const Hide = (type, typeIndex) => {
        callBack?.(type, typeIndex)
        setVisible(false)
    }

    useImperativeHandle(ref, () => ({
        Show,
        Hide
    }), [])

    const CurrencyPanel = () => { //币种
        return <div className={styles.modelBtnView}>
            <div className={styles.modelView}>
                <div className={styles.modelBtn}
                    style={{ marginLeft: 0, background: currency == 'ALL' ? '#34B498' : '#F6F6F6' }}
                    onClick={() => {
                        Hide('currency', 'ALL')
                    }}>
                    <p className={styles.text}
                        style={{ color: currency == 'ALL' ? '#FFFFFF' : '#9099A9' }}>全部</p>
                </div>
                <div className={styles.modelBtn}
                    style={{ background: currency == 'BTC' ? '#34B498' : '#F6F6F6' }}
                    onClick={() => {
                        Hide('currency', 'BTC')
                    }}>
                    <p className={styles.text}
                        style={{ color: currency == 'BTC' ? '#FFFFFF' : '#9099A9' }}>BTC</p>
                </div>
                <div className={styles.modelBtn}
                    style={{ background: currency == 'ETH' ? '#34B498' : '#F6F6F6' }}
                    onClick={() => {
                        Hide('currency', 'ETH')
                    }}>
                    <p className={styles.text}
                        style={{ color: currency == 'ETH' ? '#FFFFFF' : '#9099A9' }}>ETH</p>
                </div>
            </div>
            <div className={styles.modelView}>
                <div className={styles.modelBtn}
                    onClick={() => {
                        Hide('currency', 'USDT')
                    }}
                    style={{ marginLeft: 0, background: currency == 'USDT' ? '#34B498' : '#F6F6F6' }}>
                    <p className={styles.text} style={{ color: currency == 'USDT' ? '#FFFFFF' : '#9099A9' }}>USDT</p>
                </div>
                <div className={styles.modelBtn} style={{ opacity: 0 }}>
                    <p className={styles.text}>全部</p>
                </div>
                <div className={styles.modelBtn} style={{ opacity: 0 }}>
                    <p className={styles.text}>全部</p>
                </div>
            </div>
        </div>
    }

    const TypePanel = () => {//类型
        return <div className={styles.modelBtnView}>
            <div className={styles.modelView}>
                <div className={styles.modelBtn}
                    style={{ marginLeft: 0, background: type == 'ALL' ? '#34B498' : '#F6F6F6' }}
                    onClick={() => {
                        Hide('type', 'ALL')
                    }}>
                    <p className={styles.text} style={{ color: type == 'ALL' ? '#FFFFFF' : '#9099A9' }}>全部</p>
                </div>
                <div className={styles.modelBtn}
                    style={{ background: type == 'PLAGE' ? '#34B498' : '#F6F6F6' }}
                    onClick={() => {
                        Hide('type', 'PLAGE')
                    }}>
                    <p className={styles.text} style={{ color: type == 'PLAGE' ? '#FFFFFF' : '#9099A9' }}>质押</p>
                </div>
                <div className={styles.modelBtn}
                    style={{ background: type == 'RANSOM' ? '#34B498' : '#F6F6F6' }}
                    onClick={() => {
                        Hide('type', 'RANSOM')
                    }}>
                    <p className={styles.text} style={{ color: type == 'RANSOM' ? '#FFFFFF' : '#9099A9' }}>赎回</p>
                </div>
            </div>
        </div>
    }

    return visible ? <div className={styles.model}
        onClick={() => {
            setVisible(false)
        }}>

        <Animated.div className={styles.modelTop}
            style={{
                top: bottom.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-156, 0]
                })
            }}>
            {index ? <CurrencyPanel /> : <TypePanel />}
        </Animated.div>

    </div > : null
})

export default Index