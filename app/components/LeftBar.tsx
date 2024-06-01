import {FaUserAlt, FaCode} from "react-icons/fa"
import { IoMdHome } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import {motion} from "framer-motion"

const LeftBar = () => {
  return (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ ease: "easeIn", duration: 3 }} 
  className="md:block hidden z-10 text-3xl">
    <div className='py-6 px-2'><IoMdHome/></div>
    <div className="py-6 px-2"><FaUserAlt/></div>
    <div className="py-6 px-2"><FaCode /></div>
    <div className="py-6 px-2"><MdOutlineMail /></div>
  </motion.div>
  )
}

export default LeftBar
