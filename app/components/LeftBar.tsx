import {FaUserAlt, FaCode} from "react-icons/fa"
import { IoMdHome } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import {motion} from "framer-motion"

const LeftBar = () => {
  return (
  <motion.div
  initial={{x:-20, opacity: 0 }}
  whileInView={{x:0, opacity: 1}}
  transition={{type: "spring",
  duration: 3}}
  className="md:block hidden z-10 text-3xl px-6">
    <div className='py-5 text-4xl'><IoMdHome/></div>
    <div className="py-5 text-4xl"><FaUserAlt/></div>
    <div className="py-5 text-4xl"><FaCode /></div>
    <div className="py-5 text-4xl"><MdOutlineMail /></div>
  </motion.div>
  )
}

export default LeftBar
