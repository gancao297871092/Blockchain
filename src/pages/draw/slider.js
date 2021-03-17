import React from "react"
import styles from './index.module.css'

import { useHistory } from "react-router-dom"
import { useTranslation, getI18n } from 'react-i18next'
import { Height } from "@/utils/client"
import Accordion from "./accordion"

import rightImg from './img/right.png'
import capitalImg from './img/capital.png'
import inviteImg from './img/invite.png'
import noticeImg from './img/notice.png'
import walteImg from './img/walte.png'

import shimingImg from './img/shiming.png'
import tiaokuanImg from './img/tiaokuan.png'
import yinsiImg from './img/yinsi.png'
import yuyanImg from './img/yuyan.png'
import twitterImg from './img/twitter.png'
import telegramImg from './img/telegram.png'
import closeImg from '@/assets/close.png'

import checkImg from '@/assets/check.png'
import checkInImg from '@/assets/checkIn.png'

const Index = ({ onDock }) => {

    const { t } = useTranslation()
    const { push } = useHistory()

    const Panel = () => {
        return <div style={{
            width: 300, height: 292,
            background: '#fff', borderRadius: 16
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                marginTop: 15,
                justifyContent: 'space-between'
            }}>
                <img src={closeImg} style={{ width: 16, height: 16, opacity: 0 }} />
                <p style={{
                    color: '#141516', fontSize: 16,
                    fontWeight: '500', lineHeight: '18px'
                }}>切换语言</p>
                <img onClick={() => {
                    global.C_Model?.current?.Hide()
                }} src={closeImg}
                    style={{ width: 16, height: 16, marginRight: 20 }} />
            </div>

            <div onClick={() => {
                global.C_Model?.current?.Hide()
                getI18n().changeLanguage('zh')
            }}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: '20px 20px 0px 20px',
                    flex: 1,
                    justifyContent: 'space-between',
                    height: 50,
                    borderBottom: '.5px solid #F3F3F3'
                }}>
                <p style={{
                    color: '#141516', fontSize: 16,
                    fontWeight: '400', lineHeight: '16px'
                }}>中文简体</p>
                <img src={getI18n().language == 'zh' ? checkInImg : checkImg} style={{ width: 16, height: 16 }} />
            </div>

            <div onClick={() => {
                global.C_Model?.current?.Hide()
                getI18n().changeLanguage('zhTw')
            }}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: '0px 20px 0px 20px',
                    flex: 1,
                    justifyContent: 'space-between',
                    height: 50,
                    borderBottom: '.5px solid #F3F3F3'
                }}>
                <p style={{
                    color: '#141516', fontSize: 16,
                    fontWeight: '400', lineHeight: '16px'
                }}>中文繁體</p>
                <img src={getI18n().language == 'zhTw' ? checkInImg : checkImg}
                    style={{ width: 16, height: 16 }} />
            </div>
            <div onClick={() => {
                global.C_Model?.current?.Hide()
                getI18n().changeLanguage('en')
            }}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: '0px 20px 0px 20px',
                    flex: 1,
                    justifyContent: 'space-between',
                    height: 50,
                    borderBottom: '.5px solid #F3F3F3'
                }}>
                <p style={{
                    color: '#141516', fontSize: 16,
                    fontWeight: '400', lineHeight: '16px'
                }}>English</p>
                <img src={getI18n().language == 'en' ? checkInImg : checkImg}
                    style={{ width: 16, height: 16 }} />
            </div>
            <div style={{
                width: 260,
                height: 44,
                background: '#34B498',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 20,
                marginTop: 20
            }}>
                <p style={{
                    color: '#FFFFFF', fontSize: 14,
                    fontWeight: '500'
                }}>确定</p>
            </div>
        </div>
    }

    return <div style={{ background: '#fff', width: 300 }}>

        <div onClick={() => {
            onDock()
            push('/home/login')
            // push('/home/me')
        }} className={styles.userInfo}>
            <img className={styles.userHead} />
            <p className={styles.userName}>Ray Robertson</p>
            <img className={styles.right} src={rightImg} />
        </div>

        <div className={styles.drawView} style={{ height: Height - 180 }}>
            <div className={styles.drawContent}>
                <div className={styles.drawItem} onClick={() => {
                    onDock()
                    push('/home')
                }}>
                    <img className={styles.icon} src={capitalImg} />
                    <p className={styles.itemText}>{t('量化流动池')}</p>
                </div>
                <div className={styles.drawItem} onClick={() => {
                    onDock()
                    push('/home/spot')
                }}>
                    <img className={styles.icon} src={walteImg} />
                    <p className={styles.itemText}>{t('资产管理')}</p>
                </div>

                <Accordion onDock={onDock} />
                <div onClick={() => {
                    onDock()
                    push('/home/mainPage')
                }} className={styles.drawItem} style={{ position: 'relative', zIndex: 1 }}>
                    <img className={styles.icon} src={inviteImg} />
                    <p className={styles.itemText}>{t('超级返利')}</p>
                </div>
                <div onClick={() => {
                    onDock()
                    push('/home/notice')
                }}
                    className={styles.drawItem} style={{ borderWidth: 0 }}>
                    <img className={styles.icon} src={noticeImg} />
                    <p className={styles.itemText}>{t('通知公告')}</p>
                    <div style={{
                        width: 10, height: 10,
                        position: 'absolute', right: 24,
                        background: '#FF2727', borderRadius: 5
                    }} src={rightImg} />
                </div>
            </div>

            <div className={styles.drawContent} style={{ marginTop: 20 }}>
                <div className={styles.drawItem} onClick={() => {
                    onDock()
                    push('/home/ourMission')
                }}>
                    <img className={styles.icon} src={shimingImg} />
                    <p className={styles.itemText}>{t('我们的使命')}</p>
                </div>
                <div className={styles.drawItem} onClick={() => {
                    onDock()
                    push('/home/termsOfUse')
                }}>
                    <img className={styles.icon} src={tiaokuanImg} />
                    <p className={styles.itemText}>{t('使用条款')}</p>
                </div>
                <div className={styles.drawItem} onClick={() => {
                    onDock()
                    push('/home/privacyPolicy')
                }}>
                    <img className={styles.icon} src={yinsiImg} />
                    <p className={styles.itemText}>{t('隐私政策')}</p>
                </div>
                <div onClick={() => {
                    global.C_Model?.current?.Show({
                        dismiss: true,
                        children: <Panel />
                    })
                }}
                    className={styles.drawItem} style={{ borderWidth: 0 }}>
                    <img className={styles.icon} src={yuyanImg} />
                    <p className={styles.itemText}>{t('切换语言')}</p>
                    <img style={{
                        width: 14, height: 14,
                        position: 'absolute', right: 24
                    }} src={rightImg} />
                </div>
            </div>

            <div className={styles.linkApp}>
                <img onClick={() => {
                    window.location.href = 'twitter:///user?screen_name=xeBgfnqZpp5TBRa'
                }} className={styles.linkImg} src={twitterImg} />

                <img onClick={() => {
                    window.location.href = 'weixin://dl/businessWebview/link/?appid=wx707c5fa91ef0a58c&url=http://baidu.com'
                }}
                    className={styles.linkImg}
                    style={{ marginLeft: 30 }} src={telegramImg} />
            </div>
        </div>

    </div>
}

export default Index