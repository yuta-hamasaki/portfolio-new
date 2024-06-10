import {motion} from "framer-motion"
import { FaGithub, FaLinkedin, FaFilePdf, FaInstagram} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const RightBar = () => {
  return (
  <motion.div
  initial={{x:20, opacity: 0 }}
  whileInView={{x:0, opacity: 1}}
  transition={{type: "spring",
  duration: 3}}
  className="md:block hidden z-10 p-4">
    <div className="py-3 text-5xl "> <FaGithub /></div>
    <div className="py-3 text-5xl ">
    <FaLinkedin/></div>
    <div className="py-3 text-5xl"><FaFilePdf/></div>
    <div className="py-3 text-5xl "><MdOutlineMail/></div>
    <div className="py-3 text-5xl"><FaInstagram/></div>
  </motion.div>
  )
}

export default RightBar
