import {FaUserAlt, FaCode} from "react-icons/fa"
import { IoMdHome } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import {motion} from "framer-motion"
import Link from "next/link";

const LeftBar = () => {
  return (
  <motion.div
  initial={{x:-20, opacity: 0 }}
  whileInView={{x:0, opacity: 1}}
  transition={{type: "spring",
  duration: 3}}
  className="md:block hidden z-10 text-3xl px-6">
    <Link href="/" scroll={true}>
      <div className='py-5 text-3xl'>
      <IoMdHome/>
      </div>
    </Link>
    <Link href="#about" scroll={true}>
    <div className='py-5 text-3xl'>
    <FaUserAlt/>
    </div>
    </Link>
    <Link href="#projects" scroll={true}>
    <div className='py-5 text-3xl'>
    <FaCode />
    </div>
    </Link>
    <Link href="#contact" scroll={true}>
    <div className='py-5 text-3xl'>
    <MdOutlineMail />
    </div>
    </Link>
  </motion.div>
  )
}

export default LeftBar
