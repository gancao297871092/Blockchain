import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import './index.css'

import api from '@/network/api'
const { getLogin } = api

const Index = () => {

    useEffect(() => {
        // console.log(getLogin)
    }, [])

    return <div className="contaner">
        <p>登录页</p>
        <Link to="/home/">登录</Link>
    </div>
}

export default Index


