import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import Login from "./pages/login"
import Home from "./pages/home"
import StartPage from "./pages/startPage"

export default class App extends Component {
    render() {
        return <Router forcerefresh={true}>
            <div className="AppContainer">
                <div>
                    <Route path="/" exact component={StartPage} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/home/" exact component={Home} />
                    <Redirect from="/*" to="/" />
                </div>
            </div>
        </Router>
    }
}
