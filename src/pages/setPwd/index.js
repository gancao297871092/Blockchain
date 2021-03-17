import React, { useRef, useState, useEffect } from "react"
import styles from './index.module.css'

import { useHistory } from "react-router-dom"
// import { useTranslation } from 'react-i18next'

import mapImg from '@/assets/map.png'
import { Width, Height } from "@/utils/client"

const Index = () => {

    // const { t } = useTranslation()
    const { replace } = useHistory()

    const [pwd, setPwd] = useState('')
    const [cfmPwd, setCfmPwd] = useState('')
    const [isCanConfirm, setIsCanConfirm] = useState(false)

    const pwdRef = useRef()
    const cfmPwdRef = useRef()

    useEffect(() => {
        if (pwd.length > 0 && cfmPwd.length > 0) {
            setIsCanConfirm(true)
        } else {
            setIsCanConfirm(false)
        }
    }, [pwd, cfmPwd])

    return <div className={styles.contaner} style={{ width: Width, height: Height }}>
        <img className={styles.mapBg} src={mapImg} style={{ width: Width }} />

        <div className={styles.content} >
            <p className={styles.title}>Forgot Password</p>
            <p className={styles.text}>For the safety of your assets, no withdrawal is allowed within 24 hours after resetting the password.</p>

            <div style={{
                width: Width - 24, height: 140,
                background: "#fff", borderRadius: 16,
                marginTop: 30, display: 'flex',
                flexDirection: 'column'
            }}>
                <input
                    ref={pwdRef}
                    onChange={() => {
                        setPwd(pwdRef?.current.value)
                    }}
                    placeholder={'Password (8-16 digits include letters)'} style={{
                        flex: 1, marginLeft: 20, marginTop: 20,
                        marginRight: 20, border: 0, borderBottom: '.5px solid #F3F3F3'
                    }} />

                <input
                    ref={cfmPwdRef}
                    onChange={() => {
                        setCfmPwd(cfmPwdRef?.current.value)
                    }}
                    placeholder={'Double confirm'} style={{
                        flex: 1, marginLeft: 20, marginTop: 20,
                        marginRight: 20, border: 0
                    }} />
            </div>
            <div onClick={() => {
                if (!isCanConfirm) return
                replace('/home')
            }}
                className={styles.flexView}
                style={{
                    width: Width - 24, height: 44,
                    background: "#34B498", borderRadius: 4,
                    marginTop: 50,
                    justifyContent: 'center',
                    opacity: isCanConfirm ? 1 : .5
                }}>
                <p style={{ color: '#FFFFFF', fontSize: 14 }}>Confirm</p>
            </div>
        </div>
    </div>
}

export default Index

