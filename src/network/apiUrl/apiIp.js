

import config from '../../config'
const { network } = config

const ipConfig = {
    '1': { projectAddrass: "a3.20app.vip", protocol: "https", port: "" }, //线上
    '2': { projectAddrass: "192.168.17.209", protocol: "http", port: ":31999" } //线下
}
const ip = ipConfig[network]
const { protocol, projectAddrass, port } = ip
const blockchainIp = `${protocol}://${projectAddrass}${port}`;

export {
    blockchainIp
}