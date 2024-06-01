import {motion} from "framer-motion"
import { FaGithub, FaLinkedin, FaFilePdf, FaInstagram} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const RightBar = () => {
  return (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ ease: "easeIn", duration: 3 }} 
  className="md:block hidden z-10">
    <FaGithub className="p-2 text-5xl "/>
    <FaLinkedin className="p-2 text-5xl "/>
    <FaFilePdf className="p-2 text-5xl "/>
    <MdOutlineMail className="p-2 text-5xl "/>
    <FaInstagram className="p-2 text-5xl "/>
  </motion.div>
  )
}

export default RightBar
