import React, { useRef, useState, useEffect } from "react"
import styles from './index.module.css'
import { useHistory } from "react-router-dom"
import TimeSend from '@/components/timeSend'
// import { useTranslation } from 'react-i18next'

import leftBgImg from './img/leftBg.png'
import rightBgImg from './img/rightBg.png'
import mapImg from '@/assets/map.png'

import { Width, Height } from "@/utils/client"

const Index = () => {

    // const { t } = useTranslation()
    const { push, replace } = useHistory()

    const [numValue, setNumValue] = useState('180*****2342')
    const [email, setEmail] = useState('297871@163.com')

    const [phVerif, setPhVerif] = useState('')
    const [emVerif, setEmVerif] = useState('')

    const [type, setType] = useState(false)
    const [isCanComfir, setIsCanComfir] = useState(false)

    const phVerifRef = useRef()
    const emVerifRef = useRef()
    const phSendRef = useRef()
    const emSendRef = useRef()

    useEffect(() => {
        if (!type) {
            if (phVerif.length > 0) {
                setIsCanComfir(true)
            } else {
                setIsCanComfir(false)
            }
        } else {
            if (emVerif.length > 0) {
                setIsCanComfir(true)
            } else {
                setIsCanComfir(false)
            }
        }
    }, [type, phVerif, emVerif])

    return <div className={styles.contaner} style={{ width: Width, height: Height }}>
        <img className={styles.mapBg} src={mapImg} style={{ width: Width }} />

        <div className={styles.content} >
            <p className={styles.title}>Safety Verification</p>
            <p className={styles.text}>For the safety of your assets, no withdrawal is allowed within 24 hours after resetting the password.</p>

            <div className={styles.fromView} style={{ width: Width - 24 }}>
                <div className={styles.fromContent} style={{ width: Width - 64, marginLeft: 20 }}>
                    <div onClick={() => {
                        setType(!type)
                    }} className={styles.flexView}
                        style={{ width: '100%', height: 60 }}>
                        <div className={styles.flexView} style={{ flex: 1, justifyContent: "center" }}>
                            <p className={styles.loginType}
                                style={{
                                    marginRight: 10,
                                    color: type
                                        ? '#fff'
                                        : '#0E1213'
                                }}>Mobile Phone</p>
                        </div>
                        <div className={styles.flexView} style={{ flex: 1, justifyContent: "center" }}>
                            <p className={styles.loginType} style={{ color: type ? '#0E1213' : '#fff' }}>Email</p>
                        </div>
                    </div>
                    {type
                        ? <div className={styles.flexView}
                            style={{ height: 50, borderBottom: '1px solid #F3F3F3' }}>
                            <p className={styles.sendText}>Send the verification code to {email}</p>
                        </div>
                        : <div className={styles.flexView}
                            style={{ height: 50, borderBottom: '1px solid #F3F3F3' }}>
                            <p className={styles.sendText}>Send the verification code to {numValue}</p>
                        </div>}


                    <div style={{ position: 'relative', marginTop: 20, width: '100%', height: 50 }}>
                        <div className={styles.flexView}
                            style={{
                                height: 50, borderBottom: '1px solid #F3F3F3',
                                position: 'absolute', width: '100%',
                                top: 0, opacity: !type ? 1 : 0, zIndex: !type ? 2 : 1
                            }}>
                            <input
                                type="number"
                                ref={phVerifRef}
                                onChange={() => {
                                    setPhVerif(phVerifRef?.current.value)
                                }}
                                className={styles.verifInput}
                                placeholder={'Verification Code'} />
                            <TimeSend ref={phSendRef} sendAddress={numValue} />
                        </div>
                        <div className={styles.flexView}
                            style={{
                                height: 50, borderBottom: '1px solid #F3F3F3',
                                position: 'absolute', width: '100%', top: 0,
                                opacity: type ? 1 : 0, zIndex: type ? 2 : 1
                            }}>
                            <input
                                type="number"
                                ref={emVerifRef}
                                onChange={() => {
                                    setEmVerif(emVerifRef?.current.value)
                                }}
                                className={styles.verifInput}
                                placeholder={'Verification Code'} />
                            <TimeSend ref={emSendRef} sendAddress={email} />
                        </div>
                    </div>

                </div>
                <img src={type ? rightBgImg : leftBgImg} style={{ width: Width - 24, height: '100%' }} />
            </div>

            {/* <div className={styles.fromView}
                style={{
                    width: Width - 24, height: 140,
                    background: '#fff', borderRadius: 16
                }}>
                <div className={styles.fromContent} style={{ width: Width - 64, marginLeft: 20 }}>
                    <div className={styles.flexView}
                        style={{ height: 50, borderBottom: '1px solid #F3F3F3', marginTop: 20 }}>
                        <p className={styles.sendText}>Send the verification code to {numValue}</p>
                    </div>
                    <div className={styles.flexView}
                        style={{ height: 50, marginTop: 20 }}>
                        <input
                            type="number"
                            ref={phVerifRef}
                            onChange={() => {
                                setPhVerif(phVerifRef?.current.value)
                            }}
                            className={styles.verifInput}
                            placeholder={'Verification Code'} />
                        <TimeSend ref={phSendRef} sendAddress={numValue} />
                    </div>
                </div>
            </div> */}

            <div className={styles.flexView}
                onClick={() => {
                    if (!isCanComfir) return
                    replace('/home')
                }}
                style={{
                    width: Width - 24, height: 44,
                    background: "#34B498", borderRadius: 4,
                    marginTop: 50,
                    justifyContent: 'center',
                    opacity: isCanComfir ? 1 : .5
                }}>
                <p style={{ color: '#FFFFFF', fontSize: 14 }}>Confirm</p>
            </div>

        </div>
    </div>
}

export default Index

