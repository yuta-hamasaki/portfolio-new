import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: any;
  imageAlt: string;
  category: string;
  detail: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, imageSrc, imageAlt, category, detail }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4 m-2" style={{ height: 'auto', width: '350px' }}>
      {imageSrc && (
        <div className="mb-4 rounded-md overflow-hidden h-40 w-full flex items-center justify-center">
          <Image src={imageSrc} alt={imageAlt} width={300} height={100} layout="responsive" objectFit="cover" />
        </div>
      )}
      <p className='rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-sky-300  bg-sky-500/10 w-fit'>{category}</p>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
      <Link href={detail}>
        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-green-00 outline-none bg-green-400 rounded-full border border-gray-200 hover:scale-110 hover:duration-300 transition duration-500 mt-5 shadow-sm text-gray-600'>Find out more</button>
      </Link>
      <Link href={link}>
        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-600 outline-none bg-white rounded-full border border-green-400 hover:scale-110 hover:duration-300 mt-5 shadow-sm transition duration-500'>Visit page</button>
      </Link>
    </div>
  );
}

export default ProjectCard;
