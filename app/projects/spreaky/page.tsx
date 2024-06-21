import React from 'react';
import ShowCase from '../ShowCase';
import SpreakyImg from "../../components/spreakyhome.png";

const Page: React.FC = () => {
  const showCaseData = {
    title: "Spreaky",
    imageSrc: SpreakyImg,
    link: "https://spreaky.com",
    imageAlt: "spreaky",
    description: "This is a web service for English speaking test. I made it with React, Firebase, OpenAI API, and Stripe API",
    detail: "/spreaky",
    videoLink: "https://youtu.be/embed/FPgGqqVrt0o",
    gitLink: "",
    stacks:[
        'React',
        'CSS',
        'Firebase',
        'Stripe API',
        'OpenAI API'
    ],
    // pageImg:"http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSpreaky.f735e0df.png&w=3840&q=75"
  };

  return (
    <div>
      <ShowCase
        imagePath={showCaseData.imageSrc}
        title={showCaseData.title}
        description={showCaseData.description}
        link={showCaseData.link}
        videoLink={showCaseData.videoLink}
        stacks={showCaseData.stacks}
        gitLink = {showCaseData.gitLink}
        // pageImg = {showCaseData.pageImg}
      />
    </div>
  );
};

export default Page;
