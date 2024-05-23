"use client"; 
import Logo from './Spreaky.png';
import Zen from './Zen.jpg'
import ProjectCard from './ProjectCard';
import { useState } from "react";

interface Project {
  category: string;
  title: string;
  description: string;
  link: string;
  imageSrc: any;
  imageAlt: string;
  detail: string;
}

const Project = () => {
  const projects = [
    { category: "personal", title: "Spreaky", imageSrc: Logo, link: "https://spreaky.com", imageAlt: "spreaky",description: "This is a web service for english speaking test. I made it with React, Firebase, OpenAi API", detail: "/detail/spreaky"},
    { category: "company", title: "Zen eats", description: "This is website to find vegetarian food restaurants in Japan", link: "https://yuta-hamasaki.vercel.app", imageSrc: Zen, imageAlt: "zen-eats", detail: "/" },
  ];
  const [category, setCategory] = useState('all');

  const handleCategoryChange = (newCategory: any) => {
    
    setCategory(newCategory);
  }

  return (
    <div className='w-full pt-8 bg-blue-50'>
      <div className="flex flex-col items-center"> 
        <h1 className='text-2xl font-bold text-gray-700 mb-4 text-center'>Projects</h1>
        <div className='p-3'>
          <button onClick={() => handleCategoryChange('all')} className={`p-2 md:p-3 rounded-2xl shadow-md mb-2 md:mb-0 mr-2 text-gray-700 font-semibold text-xs transition duration-500 hover:scale-110 ${category === 'all' ? 'bg-green-300' : 'bg-white'}`}>
            All
          </button>
          <button onClick={() => handleCategoryChange('personal')} className={`p-2 md:p-3 rounded-2xl shadow-md mb-2 md:mb-0 mr-2 text-gray-700 font-semibold text-xs transition duration-500 hover:scale-110 ${category === 'personal' ? 'bg-green-300' : 'bg-white'}`}>
            Personal
          </button>
          <button onClick={() => handleCategoryChange('company')} className={`p-2 md:p-3 rounded-2xl shadow-md mb-2 md:mb-0 mr-2 text-gray-700 font-semibold text-xs transition duration-500 hover:scale-110 ${category === 'company' ? 'bg-green-300' : 'bg-white'}`}>
            Company
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center">
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