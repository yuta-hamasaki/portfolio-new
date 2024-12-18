import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {motion} from "framer-motion"

interface ProjectCardProps {
  id:string;
  title: string;
  description: string;
  link: string;
  imageSrc: any;
  imageAlt: string;
  category: string;
  stacks: string[];
}

const ProjectCard= ({
  id,
  title,
  description,
  link,
  imageSrc,
  imageAlt,
  category,
  stacks
}: ProjectCardProps ) => {
  
  return (
    <div
    className="bg-white p-4 rounded-md shadow-md mb-4 m-2 min-h-96" style={{height: 'auto', width: '400px' }}>
      {imageSrc && (
        <div className="mb-4 rounded-md overflow-hidden h-40 w-full relative">
          <Image src={imageSrc} alt={imageAlt}
          width={400}
          height={250}
          className='h-40 w-full object-cover'/>
        </div>
      )}
      <p className="rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-sky-300 bg-sky-500/10 w-fit">{category}</p>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <div className="my-2">
        {stacks.map((stack) => (
          <span key={id} className=" m-1  text-xs font-semibold text-gray-700 border border-green-500 rounded" style={{padding:'1px'}}>
            {stack}
          </span>
        ))}
      </div>
      <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      <Link href={`/projects/${id}`} passHref>
        <button className="bg-green-500 hover:text-green-700 font-semibold text-white py-2 px-4 border hover:border-green-500 border-transparent rounded hover:bg-white hover:scale-110 hover:duration-300 transition duration-500 mt-2 shadow-sm">
          Find out more
        </button>
      </Link>
      <Link href={link} passHref>
        <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent hover:scale-110 hover:duration-300 mt-5 mx-2 shadow-sm transition duration-500 rounded">
          Visit page
        </button>
      </Link>
    </div>
  );
};

export default ProjectCard;
