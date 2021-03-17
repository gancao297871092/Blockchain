import React, { forwardRef, useImperativeHandle, useState } from 'react'

import banImg from '@/assets/ban.png'

export default forwardRef((_, ref) => {

    useImperativeHandle(ref, () => ({
        Show,
        Hide
    }), [])

    const [visible, setVisible] = useState(false)

    const Show = () => {
        setVisible(true)
    }

    const Hide = () => {
        setVisible(false)
    }

    return visible ? <div style={{
        position: 'absolute', left: 0,
        right: 0, bottom: 0, top: 0,
        background: 'rgba(0,0,0,.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <div style={{
            width: 300, height: 327,
            background: '#fff', borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <img src={banImg} style={{ width: 45, height: 45, marginTop: 50 }} />
            <p style={{ color: '#141516', fontSize: 16, fontWeight: '500', marginTop: 20 }}>该账户已被禁用</p>
            <p style={{ color: '#626D7E', fontSize: 14, fontWeight: '400', marginTop: 30 }}>如需重新激活请联系邮箱</p>
            <p style={{ color: '#626D7E', fontSize: 14, fontWeight: '400', marginTop: 6 }}>dkglj@Google.com</p>
            <div
                onClick={() => {
                    Hide()
                }}
                style={{
                    width: 200, height: 44,
                    background: '#34B498', borderRadius: 4,
                    display: 'flex', justifyContent: 'center',
                    alignItems: 'center', marginTop: 30
                }}>
                <p style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '500' }}>我知道了</p>
            </div>
        </div>


    </div> : null
})

