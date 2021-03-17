import React, { useRef } from "react"
import Animated from 'animated/lib/targets/react-dom'
import { useTranslation, getI18n } from 'react-i18next'
import { useHistory } from "react-router-dom"

import styles from './index.module.css'
import rightImg from './img/right.png'
import safeImg from './img/safe.png'

const Index = ({ onDock }) => {

    const { t } = useTranslation()
    const { Value, timing } = Animated
    const animatedValue = useRef(new Value(0)).current
    const languageEn = getI18n().language == 'en'
    const { push } = useHistory()

    const animat = () => {
        const v = animatedValue._value
        timing(animatedValue, {
            toValue: v ? 0 : 1,
            duration: 300
        }).start()
    }

    return <div >
        <Animated.div className={styles.drawItem}
            onClick={() => {
                animat()
            }}
            style={{
                borderWidth: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [.5, 0]
                })
            }}>
            <img className={styles.icon} src={safeImg} />
            <p className={styles.itemText}
                onClick={() => {
                    animat()
                }}>{t('安全中心')}</p>
            <Animated.img style={{
                width: 14, height: 14,
                position: 'absolute', right: 24,
                transform: [{
                    rotate: animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '90deg']
                    })
                }]
            }} src={rightImg} />
        </Animated.div>

        <Animated.div style={{
            width: '100%',
            height: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 150]
            }),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
            })
        }}>
            <div onClick={() => {
                onDock?.()
                push('/home/authenticated')
            }} style={{
                flex: 1, height: 38,
                background: 'rgba(52, 180, 152, .1)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
                width: '100%'
            }}>
                <p style={{
                    fontsize: 14,
                    fontWeight: 400,
                    color: '#34B498',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden'
                }}>{t('安全验证')}</p>
            </div>

            <div onClick={() => {
                onDock?.()
                push('/home/setFundPwd')
            }}
                style={{
                    flex: 1, height: 38,
                    background: 'rgba(52, 180, 152, .1)',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    width: '100%',
                    marginTop: 6,
                }}>
                <p style={{
                    fontsize: 14,
                    fontWeight: 400,
                    color: '#34B498',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden'
                }}>{t('资金密码')}</p>
            </div>

            <div onClick={() => {
                onDock?.()
                push('/home/upFundPwd')
            }} style={{
                flex: 1, height: 38,
                background: 'rgba(52, 180, 152, .1)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
                marginTop: 6,
                width: '100%'
            }}>
                <p style={{
                    fontsize: 14,
                    fontWeight: 400,
                    color: '#34B498',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden'
                }}>{t('登录密码')}</p>
            </div>
        </Animated.div>
    </div>
}

export default Index