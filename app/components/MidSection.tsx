import { IoLogoJavascript } from "react-icons/io5";
import { FaReact,  FaNodeJs,FaHtml5, FaCss3 } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { WiTrain } from "react-icons/wi";


const MidSection = () => {
  interface mid {
    from: string,
    base:string,
    projects: string,
    experiense:number
}
  const mid: mid[] = [
    {
    from: "🇯🇵",
    base: "🇨🇦",
    projects:"3",
    experiense: 1
  }
  ]
  return (
    <div className="w-auto bg-blue-900 flex flex-row justify-center overflow-hidden">
      <div
        className="w-auto flex flex-row py-1 space-x-15 animate-loop-scroll"  aria-hidden="true">
        {mid.map(m =>{
        return(
          <>
            <div className="flex flex-row">
            <h3 className="text-5xl px-4 font-bold text-white transform scale-x-[-1]"><WiTrain /></h3>
              <h3 className="text-2xl py-2 font-bold text-white">Skills:</h3>
              <h3 className="text-3xl py-2 px-3 text-orange-500"><FaHtml5/></h3>
              <h3 className="text-3xl py-2 px-3 text-blue-300"><FaCss3/></h3>

              <h3 className="text-3xl py-2 px-3 text-yellow-300"><IoLogoJavascript /></h3>
              <h3 className="text-3xl py-2 px-3 text-blue-300"><FaReact/></h3>
              <h3 className="text-3xl py-2 px-3 text-green-500"><FaNodeJs/></h3>
              <h3 className="text-3xl py-2 px-3 text-white"><RiNextjsFill /></h3>
              <h3 className="text-3xl py-2 px-3 text-blue-300"><BiLogoTypescript/></h3>
              <h3 className="text-3xl py-2 px-3 text-green-500"><SiMongodb/></h3>
              <h3 className="text-3xl py-2 px-3 text-blue-300"><DiPostgresql/></h3>
            </div>
            <div className="flex flex-row whitespace-nowrap">
              <h3 className="text-2xl py-2 px-5 font-bold text-white">From: {m.from}</h3>
              <h3 className="text-2xl py-2 px-5 font-bold text-white">Based in: {m.base}</h3>
              <h3 className="text-2xl py-2 px-5 font-bold text-white">Projects: <span className=" text-green-500">{m.projects}</span>+</h3>
              <h3 className="text-2xl py-2 px-5 font-bold text-white">Experiense: <span className="text-blue-300">{m.experiense}</span> Year+</h3>
            </div>
          </>
        )
        })}

      </div>
    </div>
  )
}

export default MidSection
