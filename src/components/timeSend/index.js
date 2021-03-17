import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react'
// import { getI18n } from 'react-i18next'
import styles from './index.module.css'

export default forwardRef(({ sendAddress, isLargeBtn = false }, ref) => {

    var timer = null
    // const language = getI18n().language
    const [isCanClick, setIsCanClick] = useState(false)
    const [btnText, setBtnText] = useState('Send')


    useImperativeHandle(ref, () => ({
        resetSend,
        onSend
    }), [])

    const resetSend = () => {
        setIsCanClick(false)
        setBtnText('Send')
        clearInterval(timer)
    }

    const onSend = () => {
        if (!isCanClick) return
        var num = 60
        setIsCanClick(false)
        setBtnText(num + 's')
        timer = setInterval(() => {
            --num
            if (num <= 0) {
                setIsCanClick(true)
                setBtnText('Resend')
                clearInterval(timer)
                return
            }
            setBtnText(num + 's')
        }, 1000)
    }

    useEffect(() => {
        if (!!sendAddress) setIsCanClick(true)
        else setIsCanClick(false)
        return () => {
            clearInterval(timer)
        }
    }, [sendAddress])

    return <div className={styles[isLargeBtn ? 'largeBtnView' : 'btnView']}
        onClick={() => {
            onSend()
        }} style={{ opacity: isCanClick ? 1 : .5 }}>
        <p className={styles.btnText}>
            {btnText}
        </p>
    </div>
})


