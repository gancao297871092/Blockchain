import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { getI18n } from 'react-i18next'
import closeImg from '@/assets/close.png'

export default forwardRef(({ chooseTag }, ref) => {

    useImperativeHandle(ref, () => ({
        Show,
        Hide
    }), [])

    const dataSource = {
        en: [{
            area: 'China',
            areaCode: '+86'
        }],
        zh: [{
            area: '中国',
            areaCode: '+86'
        }],
        zhTw: [{
            area: '中國',
            areaCode: '+86'
        }]
    }

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
        background: 'rgba(0,0,0, .5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
    }}>
        <div style={{
            width: 300, height: 406,
            background: '#fff', borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                marginTop: 15,
                justifyContent: 'space-between'
            }}>
                <img src={closeImg} style={{ width: 16, height: 16, opacity: 0 }} alt='' />
                <p style={{ color: '#141516', fontSize: 16, fontWeight: '500', lineHeight: '18px' }}>地区选择</p>
                <img onClick={() => {
                    Hide()
                }} src={closeImg} style={{ width: 16, height: 16, marginRight: 20 }} alt='' />
            </div>

            <div style={{ marginTop: 20, height: 350, width: 260, overflowY: 'scroll' }}>
                {dataSource[getI18n().language].map((item, index) => <div
                    onClick={() => {
                        Hide()
                        chooseTag?.(item.areaCode)
                    }}
                    style={{
                        height: 50, width: 260,
                        borderBottom: '.5px solid #F3F3F3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    <p style={{ color: '#141516', fontSize: 16, fontWeight: '400', lineHeight: '16px' }}>{item.area}</p>
                    <p style={{ color: '#141516', fontSize: 16, fontWeight: '400', lineHeight: '16px' }}>{item.areaCode}</p>
                </div>)}
            </div>

        </div>


    </div> : null
})

