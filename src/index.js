import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import './adaptatio';
import App from './router';
import 'antd-mobile/dist/antd-mobile.css';
import getUserIp from "@/utils/getUserIp"

getUserIp()

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
