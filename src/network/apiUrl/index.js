import { forOwn } from 'lodash'
import { blockchainIp } from "./apiIp"
import config from '../../config'
var { version } = config

const apis = {
    //登录
    portal: {
        //登录接口
        getLogin: ['/user/phone/login', 'POST', 'locationInfo']
    }
}

const apisFactory = () => {
    let _apis = {}
    forOwn(apis, function (module, prefix) {
        forOwn(module, function ([uri, method, ...moreArgs], key) {
            _apis[key] = [blockchainIp + '/' + prefix + `/${version}` + uri, method, moreArgs]
        })
    })
    return _apis
}

export default apisFactory()
