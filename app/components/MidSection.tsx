import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { WiTrain } from "react-icons/wi";

const MidSection = () => {
  interface mid {
    from: string;
    base: string;
    projects: string;
    experiense: number;
  }

  const mid: mid[] = [
    {
      from: "🇯🇵",
      base: "🇨🇦",
      projects: "3",
      experiense: 1,
    },
  ];

  return (
    <div className="relative w-auto bg-slate-100 flex flex-row justify-center overflow-hidden">
      <div className="w-auto flex flex-row py-1 space-x-15 animate-loop-scroll" aria-hidden="true">
        {mid.map((m, key) => {
          return (
            <div key={key} className="flex flex-row" id="midsection">
              <h3 className="text-5xl px-5 font-bold text-slate-600 transform scale-x-[-1]"><WiTrain /></h3>
              <h3 className="text-xl pt-2 font-bold text-slate-600">Skills:</h3>
              <h3 className="text-3xl py-2 px-3 text-orange-500"><FaHtml5 /></h3>
              <h3 className="text-3xl py-2 px-3 text-blue-300"><FaCss3 /></h3>
              <h3 className="text-3xl py-2 px-3 text-yellow-300"><IoLogoJavascript /></h3>
              <h3 className="text-3xl py-2 px-3 text-blue-300"><FaReact /></h3>
              <h3 className="text-3xl py-2 px-3 text-green-500"><FaNodeJs /></h3>
              <h3 className="text-3xl py-2 px-3 text-state-400"><RiNextjsFill /></h3>
              <h3 className="text-3xl py-2 px-3 text-blue-300"><BiLogoTypescript /></h3>
              <h3 className="text-3xl py-2 px-3 text-green-500"><SiMongodb /></h3>
              <h3 className="text-3xl py-2 px-3 text-blue-300"><DiPostgresql /></h3>
            </div>
          );
        })}
        {mid.map((m, key) => {
          return (
            <div key={key} className="flex flex-row whitespace-nowrap">
              <h3 className="text-xl py-2 px-5 font-bold text-slate-600">From: {m.from}</h3>
              <h3 className="text-xl py-2 px-5 font-bold text-slate-600">Based in: {m.base}</h3>
              <h3 className="text-xl py-2 px-5 font-bold text-slate-600">Projects: <span className="text-green-500">{m.projects}</span>+</h3>
              <h3 className="text-xl py-2 px-5 font-bold text-slate-600">Experience: <span className="text-blue-300">{m.experiense}</span> Year+</h3>
            </div>
          );
        })}
      </div>
      <div className="absolute top-0 bottom-0 left-0 md:w-48 w-36 bg-gradient-to-r from-slate-100 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 md:w-48 w-36 bg-gradient-to-l from-slate-100 to-transparent pointer-events-none" />
    </div>
  );
};

export default MidSection;
