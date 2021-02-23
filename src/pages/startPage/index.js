import React, { useEffect } from 'react'
import './index.css'
import { Link } from "react-router-dom"
// import Storage from "../storage";

const Index = ({ history }) => {

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        // var userInfo = await Storage.getUserStorage()
        history.push('/login')
    }

    return <div className="contaner">
        <p>启动页</p>
        <Link to="/"></Link>
    </div>

}

export default Index


