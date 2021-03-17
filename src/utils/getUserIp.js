import { get } from "@/network/http"
import moment from 'moment-timezone'

const getUserIp = async () => { //获取ip--设置默认时区
    const userIp = await get('http://ip-api.com/json')
    window.USERIP = userIp
    moment.tz.setDefault(userIp.timezone)
}

export default getUserIp