import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next'

const Index = () => {
    const { t } = useTranslation()

    return <div className="contaner">
        <p>首页</p>
        {/* <Link to="/login">登录</Link> */}
    </div>
    
}

export default Index


