import pcRouter from "./pcRouter"
import mobileRouter from "./mobileRouter"
import { isPhone } from "@/utils/isPhone"
const router = isPhone() ? mobileRouter : pcRouter
export default router