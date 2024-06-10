import React from 'react';
import ShowCase from '../ShowCase';
import Zen from "../../components/Zen.jpg";

const Page: React.FC = () => {
  const showCaseData = { category: "company", title: "Zen eats", description: "This is a website to find vegetarian food restaurants in Japan. I made it with Node.js(Express), Ejs, and MongoDB", link: "", imageSrc: Zen, imageAlt: "zen-eats", detail: "/", stacks: ["Node.js (Express)", "Ejs", "MongoDB"], gitLink: "https://github.com/ve-go", videoLink: "" }

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
