import React, { useState, useRef } from "react"
import { Width, Height } from "@/utils/client"

// import Test from "../test"
import HeadNav from "../headNav"
import Slider from "./slider"
import Home from '../home'
import OurMission from '../home/ourMission'
import PrivacyPolicy from '../home/privacyPolicy'
import TermsOfUse from '../home/termsOfUse'

import Login from '../login'
import Earnings from '../earnings'
import ForgetPwd from '../forgetPwd'
import VerifiPwd from '../verifiPwd'
import Insert from '../insert'
import SetPwd from '../setPwd'
import Me from '../me'
import Ban from '../me/ban'
import Pledge from '../pledge'
import Success from '../pledge/success'
import BusinessHistory from '../businessHistory'
import PledgeSuccess from '../pledgeSuccess'
import Authenticated from '../securityCenter/authenticated'
import PhoneVerification from '../securityCenter/phoneVerification'
import SetFundPwd from '../securityCenter/setFundPwd'
import MakePwd from '../securityCenter/setFundPwd/makePwd'
import SafeVerifi from '../securityCenter/safeVerifi'
import VerifEnabled from '../securityCenter/verificationEnabled'
import UpFundPwd from '../securityCenter/upFundPwd'
import Spot from '../wallet/spot'
import TopUp from '../wallet/topUp'
import Withdrawal from '../wallet/withdrawal'
import WalletManner from '../wallet/walletManner'
import RechargeHistory from '../wallet/rechargeHistory'
import MainPage from '../superRebate/mainPage'
import Notice from '../notice'

import { Route, Switch } from "react-router-dom"
import Animated from 'animated/lib/targets/react-dom'

const Index = () => {

    const { Value, timing } = Animated
    const animatedValue = useRef(new Value(0)).current
    const [docked, setDocked] = useState(false)

    const onDock = () => {
        setDocked(!docked)
        const v = animatedValue._value
        timing(animatedValue, {
            toValue: v ? 0 : 1,
            duration: 300
        }).start()
    }

    return <div style={{ minHeight: Height, minWidth: Width, background: '#fff' }}>

        <Animated.div style={{
            background: '#fff',
            mingHeight: Height,
            width: Width,
            position: 'absolute',
            left: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 300]
            })
        }}>

            <div style={{
                height: docked ? Height : 'auto',
                overflow: 'initial',
                position: docked ? 'fixed' : 'relative'
            }}>
                <Switch>
                    <Route path="/home/mainPage" component={MainPage} />    {/* 超级返利 */}
                    <Route path="/home/ourMission" component={OurMission} />    {/* 我们的使命 */}
                    <Route path="/home/privacyPolicy" component={PrivacyPolicy} />    {/* 隐私政策 */}
                    <Route path="/home/termsOfUse" component={TermsOfUse} />    {/* 使用条款 */}
                    <Route path="/home/notice" component={Notice} />    {/* 通知 */}
                    <Route path="/home/rechargeHistory" component={RechargeHistory} />    {/* 充值记录 */}
                    <Route path="/home/walletManner" component={WalletManner} />    {/* 提现详情 */}
                    <Route path="/home/withdrawal" component={Withdrawal} />    {/* 提现 */}
                    <Route path="/home/topUp" component={TopUp} />    {/* 充值 */}
                    <Route path="/home/spot" component={Spot} /> {/* 现货 */}
                    <Route path="/home/success" component={Success} /> {/* 首页成功结果页 */}
                    <Route path="/home/upFundPwd" component={UpFundPwd} /> {/* 修改安全支付密码 */}
                    <Route path="/home/verifEnabled" component={VerifEnabled} />  {/* 验证通过 */}
                    <Route path="/home/safeVerifi" component={SafeVerifi} /> {/* 安全验证 */}
                    <Route path="/home/makePwd" component={MakePwd} />
                    <Route path="/home/phoneVerification" component={PhoneVerification} />
                    <Route path="/home/setFundPwd" component={SetFundPwd} /> {/* 设置安全密码 */}
                    <Route path="/home/authenticated" component={Authenticated} />  {/* 身份认证 */}
                    <Route path="/home/pledgeSuccess" component={PledgeSuccess} /> {/* 质押成功结果页 */}
                    <Route path="/home/pledge" component={Pledge} /> {/* 质押*/}
                    <Route path="/home/businessHistory" component={BusinessHistory} /> {/* 交易记录*/}
                    <Route path="/home/earnings" component={Earnings} />
                    <Route path="/home/login" component={Login} />
                    <Route path="/home/forgetPwd" component={ForgetPwd} />
                    <Route path="/home/verifiPwd" component={VerifiPwd} />
                    <Route path="/home/setPwd" component={SetPwd} />
                    <Route path="/home/insert" component={Insert} />
                    <Route path="/home/me" component={Me} />
                    <Route path="/home/ban" component={Ban} />
                    <Route path="/home" exact component={() => <Home />} />
                </Switch>

                {docked ? <div onClick={() => {
                    onDock()
                }} style={{
                    position: 'absolute', top: 0,
                    right: 0, bottom: 0, left: 0,
                    background: 'rgba(0,0,0,.5)',
                    zIndex: 9999,
                    overflow: 'hidden',
                    width: Width
                }} /> : null}
            </div>
            <div style={{
                width: Width,
                position: 'fixed',
                top: 0, zIndex: 99
            }}>
                <HeadNav onDock={onDock} />
            </div>
        </Animated.div>

        <Animated.div style={{
            minHeight: Height, width: 300,
            maxHeight: Height,
            overflowY: 'scroll',
            background: '#fff',
            position: 'fixed',
            left: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-300, 0]
            })
        }}>
            <Slider onDock={onDock} />
        </Animated.div>

    </div>
}

export default Index