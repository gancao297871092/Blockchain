import React, { useEffect, useState, useRef } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Animated from 'animated/lib/targets/react-dom'

import styles from './index.module.css'
import { useHistory } from "react-router-dom"
import { Height, Width } from "@/utils/client"
import Storage from "@/storage"

import takeImg from './img/take.png'
import highImg from './img/high.png'
import safeImg from './img/safe.png'
import userImg from './img/user.png'
import nextImg from './img/next.png'
import mapImg from '@/assets/map.png'
import titleImg from './img/title.png'
import pointImg from '@/assets/point.png'
import bottomBgImg from './img/bottomBg.png'
import convenientImg from './img/convenient.png'

import zhizhuImg from '@/assets/zhizhu.png'
import confirmationImg from '@/assets/confirmation.png'
import a16zImg from '@/assets/a16z.png'
import bcvImg from '@/assets/bcv.png'
import craftImg from '@/assets/craft.png'
import defianceImg from '@/assets/defiance.png'
import dragonflyImg from '@/assets/dragonfly.png'
import kindredImg from '@/assets/kindred.png'
import polychainImg from '@/assets/polychain.png'
import rocktreeImg from '@/assets/rocktree.png'
import scalarImg from '@/assets/scalar.png'
import spartanImg from '@/assets/spartan.png'

const Index = () => {

    const [index, setIndex] = useState(0)
    const { replace } = useHistory()

    const { Value, timing } = Animated
    const animatedValue = useRef(new Value(0)).current

    const animat = () => {
        const v = animatedValue._value
        timing(animatedValue, {
            toValue: v ? 0 : 1,
            duration: 600
        }).start(() => {
            animat()
        })
    }

    useEffect(() => {
        isNewUser()
    }, [])

    const isNewUser = async () => { //是否第一次进入
        var isNewUser = await Storage.getStorage('isNewUser')
        if (isNewUser.length < 0) {
            animat()
            Storage.setStorage('isNewUser', { isNewUser: false })
            return
        }
        getUser()
    }

    const getUser = async () => { //获取用户登录信息
        var userInfo = await Storage.getStorage('userInfo')
        if (userInfo) return replace('/home')
        replace('/home/login')
    }

    return <SwipeableViews axis='y' animateHeight
        index={index}>

        <div className={styles.body} style={{ height: Height }}>
            <img className={styles.mapBg} src={mapImg} />
            <img className={styles.bottomBg} src={bottomBgImg} />
            <div className={styles.content}>
                <p className={styles.grays}>Grayswap</p>
                <div className={styles.titleView}>
                    <img className={styles.titleImg} src={titleImg} />
                    <img className={styles.point} src={pointImg} />
                </div>
                <div className={styles.runingView}>
                    <p className={styles.runingText}>Let Profit Running</p>
                </div>
                <p className={styles.depositText}>Deposit as you take it, safe and reliable, with an annualized rate of up to 600%.</p>
                <Animated.div className={styles.botPoint}
                    style={{
                        transform: [{
                            translateY: animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 10]
                            })
                        }]
                    }}
                    onClick={() => {
                        setIndex(1)
                    }}>
                    <p className={styles.next}>Next page</p>
                    <img className={styles.nextImg} src={nextImg} />
                </Animated.div>
            </div>
        </div>

        <div className={styles.body} style={{ height: Height }}>
            <img className={styles.mapBg} src={mapImg} />
            <img className={styles.bottomBg} src={bottomBgImg} />
            <div className={styles.content}>
                <p className={styles.title}>Ten years of accumula-tion, just to be the top</p>
                <p className={styles.fastest}>The fastest, most stable and most powerful flow cell in history.</p>
                <div style={{ width: '100%', paddingLeft: 12, paddingRight: 12 }}>
                    <div className={styles.cardView} >
                        <div className={styles.cardItemView} >
                            <img className={styles.itemImg} src={takeImg} />
                            <div className={styles.takeView}>
                                <p className={styles.itemTitle}>Deposit And Take</p>
                                <p className={styles.takeText}>Efficient and convenient, real-time profit calculation, no need to wait. You can pledge to redeem at any time.</p>
                            </div>
                        </div>
                        <div className={styles.cardItemView} >
                            <img className={styles.itemImg} src={highImg} />
                            <div className={styles.takeView}>
                                <p className={styles.itemTitle}>High Returns</p>
                                <p className={styles.takeText}>The annual interest rate is as high as 600%, easy to make money.</p>
                            </div>
                        </div>
                        <div className={styles.cardItemView} >
                            <img className={styles.itemImg} src={convenientImg} />
                            <div className={styles.takeView}>
                                <p className={styles.itemTitle}>Convenient</p>
                                <p className={styles.takeText}>Support mobile terminal and pc terminal. Use any scene at any time.</p>
                            </div>
                        </div>
                        <div className={styles.cardItemView} >
                            <img className={styles.itemImg} src={safeImg} />
                            <div className={styles.takeView}>
                                <p className={styles.itemTitle}>Safe And Reliable</p>
                                <p className={styles.takeText}>Triple encryption technology ensures server secu-rity, mobile phones and mailboxes dynamically pr-otect asset security.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Animated.div className={styles.botPoint}
                    style={{
                        transform: [{
                            translateY: animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 10]
                            })
                        }]
                    }}
                    onClick={() => {
                        setIndex(2)
                    }}>
                    <p className={styles.next}>Next page</p>
                    <img className={styles.nextImg} src={nextImg} />
                </Animated.div>
            </div>
        </div>

        <div className={styles.body} style={{ height: Height }}>
            <img className={styles.mapBg} src={mapImg} />
            <img className={styles.bottomBg} src={bottomBgImg} />
            <div className={styles.content}>
                <p className={styles.title}>Trusted by more than 200,000 users</p>
                <p className={styles.fastest}>The fastest, most stable and most powerful flow cell in history.</p>
                <div style={{ width: '100%', paddingLeft: 12, paddingRight: 12 }}>
                    <div className={styles.pledgeView}>
                        <div className={styles.pledgeItem}>
                            <p className={styles.pledgeItemTitle}>Cumulative pledge</p>
                            <p className={styles.pledgeValue}>$84967385939.24</p>
                        </div>
                        <div className={styles.pledgeItem}>
                            <p className={styles.pledgeItemTitle}>Create revenue for users</p>
                            <p className={styles.pledgeValue}>$45768945867.24</p>
                        </div>
                        <div className={styles.pledgeItem} style={{ border: 0 }}>
                            <p className={styles.pledgeItemTitle}>New users in the past 24h</p>
                            <div className={styles.userView}>
                                <img className={styles.userImg} src={userImg} />
                                <p className={styles.pledgeValue} style={{ marginTop: 0, marginLeft: 5 }}>9000+</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Animated.div className={styles.botPoint}
                    style={{
                        transform: [{
                            translateY: animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 10]
                            })
                        }]
                    }}
                    onClick={() => {
                        setIndex(3)
                    }}>
                    <p className={styles.next}>Next page</p>
                    <img className={styles.nextImg} src={nextImg} />
                </Animated.div>
            </div>
        </div>

        <div className={styles.body} style={{ height: Height }}>
            <img className={styles.mapBg} src={mapImg} />
            <img className={styles.bottomBg} src={bottomBgImg} />
            <div className={styles.content}>
                <p className={styles.title}>Top investors from worldwide</p>
                <p className={styles.fastest}>Our global investors, including angel investors and venture capital funds.</p>
                <div style={{ width: '100%' }}>
                    <div className={styles.capitalView}>
                        <div className={styles.capitalItem} style={{ width: (Width - 34) / 2 }}>
                            <img className={styles.zhizhuImg} src={zhizhuImg} />
                        </div>
                        <div className={styles.capitalItem} style={{ width: (Width - 34) / 2 }}>
                            <img className={styles.confirmationImg} src={confirmationImg} />
                        </div>
                        <div className={styles.capitalItem} style={{ width: (Width - 34) / 2 }}>
                            <img className={styles.a16zImg} src={a16zImg} />
                        </div>
                        <div className={styles.capitalItem} style={{ width: (Width - 34) / 2 }}>
                            <img className={styles.bcvImg} src={bcvImg} />
                        </div>
                        <div className={styles.capitalItem} style={{ width: (Width - 34) / 2 }}>
                            <img className={styles.craftImg} src={craftImg} />
                        </div>
                        <div className={styles.capitalItem} style={{ width: (Width - 34) / 2 }}>
                            <img className={styles.defianceImg} src={defianceImg} />
                        </div>
                        <div className={styles.capitalItem} style={{ width: (Width - 34) / 2 }}>
                            <img className={styles.dragonflyImg} src={dragonflyImg} />
                        </div>
                        <div className={styles.capitalItem} style={{ width: (Width - 34) / 2 }}>
                            <img className={styles.kindredImg} src={kindredImg} />
                        </div>
                    </div>
                </div>
                <div className={styles.goBtnView} onClick={() => {
                    replace('home')
                }}>
                    <p className={styles.goText}>Go</p>
                </div>
            </div>
        </div>

    </SwipeableViews>
}

export default Index


