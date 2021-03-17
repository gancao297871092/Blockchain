import React, { useRef, useState, useEffect } from "react"
import styles from './index.module.css'
import { useHistory } from "react-router-dom"
// import { useTranslation } from 'react-i18next'
import Areachoice from '@/components/areachoice'
import TimeSend from '@/components/timeSend'

import eyesInImg from '@/assets/eyesIn.png'
import eyesOutImg from '@/assets/eyesOut.png'
import pointImg from '@/assets/point.png'
import grayCloseImg from '@/assets/grayClose.png'
import checkImg from '@/assets/check.png'
import checkInImg from '@/assets/checkIn.png'
import leftBgImg from './img/leftBg.png'
import rightBgImg from './img/rightBg.png'
import bottomImg from '@/assets/bottom.png'
import mapImg from '@/assets/map.png'

import { Width, Height } from "@/utils/client"

const Index = () => {

    // const { t } = useTranslation()
    const areachoiceRef = useRef()
    const { replace } = useHistory()

    const [numValue, setNumValue] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [invi, setInvi] = useState('')

    const [phVerif, setPhVerif] = useState('')
    const [emVerif, setEmVerif] = useState('')

    const [isCanRegiste, setIsCanRegiste] = useState(false)
    const [isCheckIn, setIsCheckIn] = useState(false)

    const [isEyes, setIsEyes] = useState(false)

    const [type, setType] = useState(false)

    const numRef = useRef()
    const emailRef = useRef()
    const pwdRef = useRef()
    const inviRef = useRef()

    const phVerifRef = useRef()
    const emVerifRef = useRef()
    const phSendRef = useRef()
    const emSendRef = useRef()

    useEffect(() => {
        if (!type) {
            if (numValue.length > 0 && pwd.length > 0 && phVerif.length > 0 && isCheckIn) {
                setIsCanRegiste(true)
            } else {
                setIsCanRegiste(false)
            }
        } else {
            if (email.length > 0 && pwd.length > 0 && emVerif.length > 0 && isCheckIn) {
                setIsCanRegiste(true)
            } else {
                setIsCanRegiste(false)
            }
        }
    }, [type, numValue, email, pwd, phVerif, emVerif, isCheckIn])

    return <div className={styles.contaner} style={{ width: Width, minHeight: Height }}>

        <img className={styles.mapBg} src={mapImg} style={{ width: Width }} />

        <div className={styles.content} >
            <p className={styles.title}>Welcome to Graywap</p>

            <div onClick={() => {
                replace('/home/login')
            }} className={styles.flexView} style={{ marginTop: 12 }}>
                <p className={styles.text}>If you already have an account,</p>
                <p className={styles.text} style={{ marginLeft: 4, textDecoration: 'underline' }}>Login</p>
                <img src={pointImg} style={{ width: 14, height: 14, marginLeft: 5 }} />
            </div>

            <div className={styles.fromView} style={{ width: Width - 24 }}>
                <div className={styles.fromContent} style={{ width: Width - 64, marginLeft: 20 }}>

                    <div onClick={() => {
                        setType(!type)
                    }} className={styles.flexView} style={{ width: '100%', height: 60 }}>
                        <div className={styles.flexView} style={{ flex: 1, justifyContent: "center" }}>
                            <p className={styles.loginType}
                                style={{ marginRight: 10, color: type ? '#fff' : '#0E1213' }}>Mobile Phone</p>
                        </div>
                        <div className={styles.flexView} style={{ flex: 1, justifyContent: "center" }}>
                            <p className={styles.loginType} style={{ color: type ? '#0E1213' : '#fff' }}>Email</p>
                        </div>
                    </div>

                    <div style={{ position: 'relative', width: '100%', height: 50 }}>
                        <div className={styles.flexView}
                            style={{
                                height: 50, borderBottom: '1px solid #F3F3F3',
                                position: 'absolute', width: '100%',
                                top: 0, opacity: !type ? 1 : 0, zIndex: !type ? 2 : 1
                            }}>
                            <div className={styles.flexView}
                                onClick={() => {
                                    areachoiceRef?.current?.Show()
                                }}>
                                <p className={styles.areaCode}>+86</p>
                                <img src={bottomImg} style={{ width: 14, height: 14, marginLeft: 6 }} />
                            </div>
                            <div style={{ width: 1, height: 17, marginLeft: 10, background: '#626D7E' }} />
                            <div className={styles.numInput} style={{
                                marginLeft: 0, position: 'relative',
                                display: 'flex', alignItems: 'center'
                            }}>
                                <input type="number"
                                    id='number'
                                    ref={numRef}
                                    onChange={() => {
                                        setNumValue(numRef?.current.value)
                                    }}
                                    className={styles.numInput}
                                    placeholder={'Enter Phone Number'} />
                                {numValue.length > 0
                                    ? <img src={grayCloseImg}
                                        onClick={() => {
                                            document.getElementById("number").value = ""
                                            setNumValue('')
                                            phSendRef?.current?.resetSend()
                                        }}
                                        style={{
                                            width: 17, height: 16,
                                            position: 'absolute', right: 0
                                        }} />
                                    : null}
                            </div>
                        </div>

                        <div style={{
                            height: 50, borderBottom: '1px solid #F3F3F3',
                            position: 'absolute', width: '100%',
                            top: 0, opacity: type ? 1 : 0, zIndex: type ? 2 : 1
                        }}>
                            <div className={styles.flexView}
                                style={{ height: 50, borderBottom: '1px solid #F3F3F3', position: 'relative' }}>
                                <input type="email"
                                    id='email'
                                    ref={emailRef}
                                    onChange={() => {
                                        setEmail(emailRef?.current.value)
                                    }}
                                    className={styles.pwdInput}
                                    placeholder={'Enter Email Address'} />
                                {email.length > 0
                                    ? <img src={grayCloseImg}
                                        onClick={() => {
                                            document.getElementById("email").value = ""
                                            setEmail('')
                                            emSendRef?.current?.resetSend()
                                        }}
                                        style={{
                                            width: 17, height: 16,
                                            position: 'absolute', right: 0
                                        }} />
                                    : null}
                            </div>
                        </div>
                    </div>

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

                    <div className={styles.flexView}
                        style={{ height: 50, borderBottom: '1px solid #F3F3F3', marginTop: 20 }}>
                        <input
                            type={isEyes ? 'text' : 'password'}
                            ref={pwdRef}
                            onChange={() => {
                                setPwd(pwdRef?.current.value)
                            }}
                            className={styles.pwdInput}
                            placeholder={'Password (8-16 digits include letters)'} />
                        <img src={isEyes ? eyesInImg : eyesOutImg}
                            onClick={() => {
                                setIsEyes(!isEyes)
                            }}
                            style={{
                                width: 17, height: 16,
                                position: 'absolute', right: 0
                            }} />
                    </div>

                    <div className={styles.flexView}
                        style={{ height: 50, borderBottom: '1px solid #F3F3F3', marginTop: 20 }}>
                        <input
                            type="number"
                            ref={inviRef}
                            onChange={() => {
                                setInvi(inviRef?.current.value)
                            }}
                            className={styles.pwdInput}
                            placeholder={'Invitation Code(Optional)'} />
                    </div>
                </div>
                <img src={type ? rightBgImg : leftBgImg} style={{ width: Width - 24, height: '100%' }} />
            </div>

            <div onClick={() => {
                if (!isCanRegiste) return
                replace('/home')
            }}
                className={styles.flexView}
                style={{
                    width: Width - 24, height: 44,
                    background: "#34B498", borderRadius: 4,
                    marginTop: 50,
                    justifyContent: 'center',
                    opacity: isCanRegiste ? 1 : .5
                }}>
                <p style={{ color: '#FFFFFF', fontSize: 14 }}>Register</p>
            </div>

            <div className={styles.flexView} style={{ alignItems: 'flex-start', marginTop: 46 }}>
                <img onClick={() => {
                    setIsCheckIn(!isCheckIn)
                }}
                    src={isCheckIn ? checkInImg : checkImg}
                    style={{ width: 16, height: 16 }} />
                <p style={{ color: '#626D7E', fontSize: 14, marginLeft: 10, lineHeight: '21px' }}>
                    I have read and agree to the
                    <p style={{ color: '#34B498', display: 'inline-block' }}>User Agreement</p>
                    <p>and<p style={{ color: '#34B498', display: 'inline-block', marginLeft: 4 }}>Privacy Policy</p></p>
                </p>
            </div>

        </div>

        <Areachoice ref={areachoiceRef}
            chooseTag={t => {
                // alert(t)
            }} />
    </div>
}

export default Index

