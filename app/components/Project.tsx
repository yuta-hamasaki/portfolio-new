"use client"; 
import Zen from '@/public/Zen.jpg';
import myportfolio from '@/public/myportfolio.png'
import ProjectCard from './ProjectCard';
import { useState } from "react";


const Project = () => {
  const projects = [
    { category: "Team", title: "Zen eats", description: "This is a website to find vegetarian food restaurants in Japan. I made it with Node.js(Express), Ejs, and MongoDB", link: "https://github.com/yuta-hamasaki/ve-go", imageSrc: Zen, imageAlt: "zen-eats", detail: "/projects/zeneats", stacks: ["Node.js (Express)", "Ejs", "MongoDB"] },    
    { category: "personal", title: "My Portfolio", description: "This is my portfolio-site made with Next.js, Typescript, TailwindCSS and Email.js", link: "https://yutahamasaki.vercel.app", imageSrc: myportfolio, imageAlt: "zen-eats", detail: "/projects/portfolio", stacks: ["Next.js", "Typescript", "TailwindCSS"] }
  ];
  const [category, setCategory] = useState('all');

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  }

  return (
    <div className='w-full bg-green-100 py-16' id="projects">
      <div className="flex flex-col items-center"> 
        <h1 className='text-2xl font-bold text-gray-700 mb-4 text-center'>Projects</h1>
        <div className='p-3'>
          <button onClick={() => handleCategoryChange('all')} className={`p-2 md:p-3 rounded-xl shadow-md mb-2 md:mb-0 mr-2 text-gray-700 font-semibold text-xs transition duration-500 hover:scale-110 ${category === 'all' ? 'bg-green-500 text-white' : 'bg-white'}`}>
            All
          </button>
          <button onClick={() => handleCategoryChange('personal')} className={`p-2 md:p-3 rounded-xl shadow-md mb-2 md:mb-0 mr-2 text-gray-700 font-semibold text-xs transition duration-500 hover:scale-110 ${category === 'personal' ? 'bg-green-500 text-white' : 'bg-white'}`}>
            Personal
          </button>
          <button onClick={() => handleCategoryChange('team')} className={`p-2 md:p-3 rounded-xl shadow-md mb-2 md:mb-0 mr-2 text-gray-700 font-semibold text-xs transition duration-500 hover:scale-110 ${category === 'team' ? 'bg-green-500 text-white' : 'bg-white'}`}>
            Team
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center ">
          {projects.map((project, index) => {
            if (category === 'all' || project.category === category) {
              return (
                <ProjectCard
                  key={index}
                  category={project.category}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  detail={project.detail}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                  stacks={project.stacks}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
