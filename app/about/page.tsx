import Image from 'next/image'
import Header from '../components/Header'
import MyPic from "../components/YutaHamasaki_Img.JPG"


const page = () => {
  return (
    <>
    <Header/>
    <div className="h-auto pt-10 bg-green-50 p-20">
      <div className="pt-16 flex justify-center flex-col">
        <h2 className="font-bold text-xl text-center">About Me</h2>
        <div className="flex md:flex-row flex-col justify-center items-center p-2">
        <Image src={MyPic} alt="My pic" className="h-auto md:ml-10 md:w-2/5 w-3/5 rounded shadow"/>
        <div className="p-10">
          <p>My Name is Yuta Hamasaki. As an aspiring Front-End Developer based in Vancouver, Canada, I am deeply passionate about creating user-centric and responsive web applications. Despite not having formal job experience in the field, I have dedicated significant time to self-study and hands-on practice, focusing on mastering HTML, CSS, JavaScript, and gaining proficiency in TypeScript and React.js, Next.js, Node.js, Redux, Python for building user-friendly applications.</p>
        </div>
        </div>
      </div>

      <div className="pt-16 flex justify-center flex-col">
        <h2 className="font-bold text-xl text-center">Education</h2>
        <div className="flex md:flex-row flex-col justify-center items-center p-2">
        <div className="p-10">
          <p>My Name is Yuta Hamasaki. As an aspiring Front-End Developer based in Vancouver, Canada, I am deeply passionate about creating user-centric and responsive web applications. Despite not having formal job experience in the field, I have dedicated significant time to self-study and hands-on practice, focusing on mastering HTML, CSS, JavaScript, and gaining proficiency in TypeScript and React.js, Next.js, Node.js, Redux, Python for building user-friendly applications.</p>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page
