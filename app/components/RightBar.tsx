import {motion} from "framer-motion"
import { FaGithub, FaLinkedin, FaFilePdf, FaInstagram} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Link from 'next/link';

const RightBar = () => {
  return (
  <motion.div
  initial={{x:20, opacity: 0 }}
  whileInView={{x:0, opacity: 1}}
  transition={{type: "spring",
  duration: 3}}
  className="md:block hidden z-10 p-4">
    <div className="py-3 text-4xl ">
      <Link href="https://github.com/yuta-hamasaki">
        <FaGithub />
      </Link>
    </div>
    <div className="py-3 text-4xl ">
      <Link href="https://www.linkedin.com/in/yuta-hamasaki-623400215/">
        <FaLinkedin/>
      </Link>
    </div>
    <div className="py-3 text-4xl">
      <Link href="#">
      <FaFilePdf/>
      </Link>
    </div>
    <div className="py-3 text-4xl ">
      <Link href="mailto:yh02052002@icloud.com">
        <MdOutlineMail/>
      </Link>
    </div>
    <div className="py-3 text-4xl">
      <Link href="https://instagram.com/yuta.h_25">
        <FaInstagram/>
      </Link>
    </div>
  </motion.div>
  )
}

export default RightBar
