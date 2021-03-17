import React from "react"

import styles from './index.module.css'
import { useHistory } from "react-router-dom"
// import { useTranslation } from 'react-i18next'

import banImg from '@/assets/ban.png'
import tipsImg from '@/assets/tips.png'
import closeImg from './img/close.png'
import mapImg from '@/assets/map.png'
import { Width } from "@/utils/client"

const Index = () => {

    const { replace } = useHistory()

    const Panel = () => {
        return <div style={{
            width: 300, height: 327,
            background: "#fff", borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'row'
            }}>
                <img src={closeImg}
                    onClick={() => {
                        global.C_Model?.current?.Hide()
                    }}
                    style={{
                        width: 16, height: 16,
                        marginTop: 20, marginRight: 20
                    }} />
            </div>
            <img src={banImg} style={{ width: 43, height: 43, marginTop: 18 }} />
            <p style={{ color: '#141516', fontSize: 16, fontWeight: '500', marginTop: 21 }}>确定禁用该账户？</p>
            <p style={{ color: '#626D7E', fontSize: 14, fontWeight: '400', marginTop: 30 }}>如需重新激活请发送邮件至 </p>
            <p style={{ color: '#626D7E', fontSize: 14, fontWeight: '400', marginTop: 4 }}>dkglj@Google.com</p>
            <div onClick={() => {
                global.C_Model?.current?.Hide()
                replace('login')
            }}
                style={{
                    marginTop: 30, width: 260, height: 44,
                    background: '#D90000', borderRadius: 4,
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <p className={styles.banText} style={{ color: '#fff' }}>确定禁用</p>
            </div>
        </div>
    }

    return <div className={styles.contaner} style={{ width: Width, minHeight: 375 }}>
        <div className={styles.linearBg} />
        <img className={styles.mapBg} src={mapImg} style={{ width: Width }} />

        <div className={styles.content}>
            <div className={styles.banCard}>
                <div className={styles.flexView}
                    style={{ flex: 1, justifyContent: 'center', marginTop: 40 }}>
                    <p className={styles.banTitle}>禁用账户</p>
                </div>
                <div className={styles.flexView}
                    style={{ flex: 1, marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                    <p className={styles.banDescribe}>请谨慎使用此功能，禁用后将导致以下结果。请仔细阅读。</p>
                </div>
                <div className={styles.describeView}>
                    <div className={styles.flexView} style={{ margin: '21px 37px 0px 10px' }}>
                        <img className={styles.banImg} src={tipsImg} />
                        <p className={styles.describeText}>该账户所有登录和交易功能都将被禁用</p>
                    </div>
                    <div className={styles.flexView} style={{ margin: '21px 37px 0px 10px' }}>
                        <img className={styles.banImg} src={tipsImg} />
                        <p className={styles.describeText}>该账户的所有API都将被删除</p>
                    </div>
                    <div className={styles.flexView} style={{ margin: '21px 37px 0px 10px', alignItems: 'flex-start' }}>
                        <img className={styles.banImg} src={tipsImg} />
                        <p className={styles.describeText} style={{ lineHeight: '21px' }}>如您需重新激活该账户，请发送邮件至fgghj@Google.com</p>
                    </div>
                </div>
                <div onClick={() => {
                    global.C_Model?.current?.Show({
                        dismiss: true,
                        children: <Panel />
                    })
                }}
                    className={styles.banBtn} style={{ marginTop: 23 }}>
                    <p className={styles.banText}>禁用此账户</p>
                </div>
            </div>

        </div>
    </div>
}

export default Index

