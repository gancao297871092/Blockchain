import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react'

export default forwardRef(({ zIndex }, ref) => {

    useImperativeHandle(ref, () => ({
        Show,
        Hide
    }), [])

    const [visible, setVisible] = useState(false)
    const [dismiss, setDismiss] = useState(false)
    const [children, setChildren] = useState(<div />)

    useEffect(() => {
        if (visible) return
        setDismiss(false)
        setChildren(<div />)
    }, [visible])

    const Show = ({ children, dismiss = false }) => {
        setChildren(children)
        setVisible(true)
        setDismiss(dismiss)
    }

    const Hide = () => {
        setVisible(false)
    }

    return visible ? <div

        style={{
            position: 'absolute', left: 0,
            right: 0, bottom: 0, top: 0, zIndex,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <div onClick={() => {
            if (dismiss) return
            setVisible(false)
        }}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,.5)',
                zIndex: -1
            }} />
        {children}
    </div> : null
})

