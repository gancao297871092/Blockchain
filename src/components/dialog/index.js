import React, { forwardRef, useImperativeHandle, useState } from 'react'

// import { getI18n } from 'react-i18next'
import styles from './index.module.css'
import greenBanImg from '@/assets/greenBan.png'

let _callBack = null

export default forwardRef(({ zIndex }, ref) => {

    // const language = getI18n().language

    const [visible, setVisible] = useState(false)
    const [src, setSrc] = useState(greenBanImg)
    const [title, setTitle] = useState('')
    const [titleColor, setTitleColor] = useState('#141516')
    const [content, setContent] = useState('')
    const [contentColor, setContentColor] = useState('#626D7E')
    const [btnText, setBtnText] = useState('')

    useImperativeHandle(ref, () => ({
        Show,
        Hide
    }), [])

    const Show = ({
        src = greenBanImg,
        title = '', titleColor = '#141516',
        content = '', contentColor = '#626D7E',
        callBack, btnText }) => {
        _callBack = null
        setVisible(true)
        setSrc(src)
        setTitle(title)
        setTitleColor(titleColor)
        setContent(content)
        setContentColor(contentColor)
        setBtnText(btnText)
        _callBack = callBack
    }

    const Hide = () => {
        setVisible(false)
        setTitle('')
        setContent('')
    }

    return visible ? <div onClick={() => {
        Hide()
    }} style={{
        position: 'absolute', left: 0,
        right: 0, bottom: 0, top: 0, zIndex,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,.5)'
    }}>
        <div className={styles.modelStyle} >
            <img src={src} alt="" className={styles.modelImg} />
            {!!title ? <p className={styles.modelTitle} style={{ color: titleColor }}>{title}</p> : null}
            <p className={styles[!!title ? 'modelContent' : 'modelLargeContent']} style={{ color: contentColor }} >{content}</p>
            <div className={styles.btnView}
                onClick={() => {
                    Hide()
                    _callBack?.()
                }}>
                <p className={styles.btnText}>{btnText}</p>
            </div>
        </div >
    </div> : null
})


