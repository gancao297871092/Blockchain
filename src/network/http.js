import axios from 'axios'
// import isThrottleApis from './throttleApis'

const instance = axios.create({
    timeout: 15000,
    timeoutErrorMessage: '服务连接超时,请重试'
})

let fromToken
let pending = []
// let cancelToken = axios.CancelToken;
let removePending = ({ url, method }) => {
    for (let p in pending)
        if (pending[p].u === url + '&' + method) {
            //取消请求
            pending[p].f();
            pending.splice(p, 1);
        }
}

export function get(url, params, token) {
    fromToken = token
    return instance.get(url, { params });
}

export function postByJson(url, params, token) {
    fromToken = token
    return instance.post(url, params);
}

export function postByQs(url, params, token) {
    fromToken = token
    return instance.post(url, {}, { params })
}

export function post(url, params, token) {
    fromToken = token
    return instance.post(url, JSON.stringify(params))
}

// 请求拦截器
instance.interceptors.request.use(
    config => {
        config.headers = { 'Content-Type': 'application/json' }
        if (fromToken) config.headers.userToken = fromToken
        // else global.token && (config.headers.userToken = global.token) || '1'
        config.headers['Content-Type'] = 'application/json'

        // if (isThrottleApis(config.url)) {
        //     removePending(config);
        //     config.cancelToken = new cancelToken((c) => void pending.push({ u: config.url + '&' + config.method, f: c }));
        // }

        return config
    },
    error => {
        if (axios.isCancel(error)) return Promise.reject(Error('isCancel'))
        console.log(error, 'request故障')
        if (error.response && error.response.status) {
            switch (error.response.status) {
                // case 401: return go2Login('账户已在其他设备登录')
                // case 999: return go2Login(error.response.data.msg || '用户信息变更,请重新登录')
                // case 998: return go2Login(error.response.data.msg || '用户信息变更,请重新登录')
                // default: return Promise.reject(error)
            }
        }
        return Promise.reject(error || Error('网络故障'));
    }
)

// 响应拦截器
instance.interceptors.response.use(
    response => {
        removePending(response.config)
        var data = response.data;
        if (response.status == 200) {
            if (data.code)
                switch (data.code) {
                    case 6358:
                    // return void go2Login(response.data.msg || '账户已在其他设备登录')
                }
            return Promise.resolve(data);
        }
        else return Promise.reject(Error(`${data.code} : ${data.msg}`))
    },
    error => {
        if (axios.isCancel(error)) return Promise.reject(Error('isCancel'))
        console.log(error, 'response故障')
        if (error.response && error.response.status) {
            switch (error.response.status) {
                // case 401: return go2Login('账户已在其他设备登录')
                // case 999: return go2Login(error.response.data.msg || '用户信息变更,请重新登录')
                // case 998: return go2Login(error.response.data.msg || '用户信息变更,请重新登录')
                // default: return Promise.reject(error || Error('网络故障'))
            }
        }
        return Promise.reject(error || Error('网络故障'))
    }
)

