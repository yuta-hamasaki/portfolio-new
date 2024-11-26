"use client"
import React from 'react';
import ShowCase from '../ShowCase';
import { showCaseData } from '@/utils/portfolio';
import { useParams } from 'next/navigation';

const Page = () => {
  const {id} = useParams()
  const data = showCaseData.find((item) => item.id === id);
  if (!data) {
    return <p>No data found for ID: {id}</p>;
  }
  return (
    <div>
      <ShowCase
        imagePath={data.imageSrc}
        title={data.title}
        description={data.description}
        link={data.link}
        videoLink={data.videoLink}
        stacks={data.stacks}
        gitLink = {data.gitLink}
        // pageImg = {showCaseData.pageImg}
      />
    </div>
  );
};

export default Page;
