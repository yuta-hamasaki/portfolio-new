import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ShowCaseProps {
  imagePath: StaticImageData;
  title: string;
  description: string;
  link: string;
  videoLink: string;
  gitLink: string ,
  stacks: string[],
  // pageImg: StaticImageData
}

const ShowCase = ({ imagePath, title, description, link, videoLink , gitLink, stacks}:ShowCaseProps) => {
  return (
    <div className='flex items-center flex-col mt-8'>
      <div className='w-4/5 h-auto md:w-3/5'>
        <Image src={imagePath} alt={title} layout="object-fit" objectFit="cover" className='px-7'/>
      </div>
      <div className="m-5">
        <h2 className='font-bold text-3xl'>{title}</h2>
      </div>
      <p className='px-8'>{description}</p>
      <div className="m-3">
      {stacks.map((stack, index) => (
          <span key={index} className="border border-green-500 rounded p-2 text-sm font-semibold text-gray-700 mr-1">
            {stack}
          </span>
        ))}
      </div>

      {/* Img section */}
      {/* <div>
      {pageImg ?(
        <Image src={pageImg} alt="pageImg" className='h-auto w-65'/>
        ):
        (<></>)
      }
      </div> */}
      {/* video section */}
      <div>
        {videoLink ?(
          <iframe src={videoLink}
          width="full" height="200"/>
        ):<></>
      }
      </div>
      <div className="flex flex-row m-5">
        {link==="" ?(
          <></>
        ):(
          <Link href={link}>
          <button className=' bg-green-500 hover:text-green-700 font-semibold text-white py-2 px-4 border hover:border-green-500 border-transparent rounded hover:bg-white hover:scale-110 hover:duration-300 transition duration-500 mt-2 shadow-sm '>
            Visit page
          </button>
        </Link>
        )
        }

        {gitLink===""? (<></>):(
          <Link href={gitLink}>
            <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent hover:scale-110 hover:duration-300 mt-2 mx-2 shadow-sm transition duration-500 rounded'>
              Github
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ShowCase;
