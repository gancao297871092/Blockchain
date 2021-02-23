import { forOwn } from 'lodash'
// import to from 'await-to-js'
// import MoreArgsInject from './moreArgsInject'
import apiUrl from "./apiUrl"
import { get, post, postByQs, postByJson } from "./http"

function apiUrlFactory() {
    let apiUrlObject = {}
    forOwn(apiUrl, function ([uri, method, moreArgs], key) {
        apiUrlObject[key] = async (params, token) => {
            var httpFn = [get, post, postByQs, postByJson][['GET', 'POST', 'POSTQS', 'POSTJSON'].indexOf(method)]
            // var [err, params] = await to(MoreArgsInject(params, moreArgs))
            // if (err) return Promise.reject(err || Error('程序参数处理异常,模块:MoreArgsInject'));
            return httpFn(uri, params, token)
        }
    })
    return apiUrlObject
}

export default apiUrlFactory()