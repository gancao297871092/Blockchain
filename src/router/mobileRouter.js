import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import Draw from "../pages/draw"
import Login from "../pages/login"
import StartPage from "../pages/startPage"
import Drawer from "@/components/drawer"
import Model from "@/components/model"
import Toast from "@/components/toast"
import Dialog from "@/components/dialog"

const Index = () => {

    global.C_Drawer = useRef()
    global.C_Model = useRef()
    global.C_Toast = useRef()
    global.C_Dialog = useRef()

    return <div>
        <Router forcerefresh={true}>
            <div className="AppContainer">
                <Route path="/" exact component={StartPage} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Draw} />
                <Redirect from="/*" to="/" />
            </div>
        </Router>

        <Drawer zIndex={11} ref={global.C_Drawer} />
        <Model zIndex={12} ref={global.C_Model} />
        <Dialog zIndex={13} ref={global.C_Dialog} />
        <Toast zIndex={14} ref={global.C_Toast} />
    </div>
}

export default Index