import HistoryCard from './HisoryCard'


interface History{
  time:string;
  place:string;
  title: string;
  desc: string;
}

const History = () => {
  const history = [
    {
      time:"2020-2022",
      place:"Kagawa - Japan",
      title:"Anabuki Business College(Diploma) - Global Business",
      desc:"Graduated 2 year college, majored in Global Business",
    },
    {
      time:"2022-2024",
      place:" Kyoto - Japan",
      title:"Kyoto University of Foregin Studies(Bachelor) - Global Studies",
      desc:"Tranferd this University and studied 2 years. Graduated with Bachelor degree of in Global Studies",
    },
    {
      time:"2024 - Current",
      place:"Vancouver - Canada",
      title:"Cornerstone Ineternational Community College(Diploma) - Web Development",
      desc:"Learned web development ",
    },
  ]

  const experience = [
    {
      time:"2020-2022",
      place:"Kagawa - Japan",
      title:"Software - Intern",
      desc:"Test",
    },
    {
      time:"2020-2022",
      place:"Kagawa - Japan",
      title:"Software - Intern",
      desc:"Test",
    },
    {
      time:"2020-2022",
      place:"Kagawa - Japan",
      title:"Software - Intern",
      desc:"Test",
    },
  ]


  return (
    <div className="m-5 flex flex-col md:flex-row">
      <div className="m-2">
        <h2 className="text-center font-bold text-xl">Education</h2>
        <div className="relative pl-10 m-4">
            <div className="absolute left-11 top-0 bottom-0 w-1 bg-gray-300"></div>
            {history.map((content,index)=>{
              return(
                <HistoryCard
                key={index}
                time={content.time}
                place={content.place}
                title={content.title}
                desc={content.desc}
            />
            )
          })}
          </div>
      </div>

      <div className="m-2">
        <h2 className="text-center font-bold text-xl">Experience</h2>
        <div className="relative pl-10 m-4">
        <div className="absolute left-11 top-0 bottom-0 w-1 bg-gray-300"></div>
        {experience.map((content,index)=>{
          return(
            <HistoryCard
            key={index}
            time={content.time}
            place={content.place}
            title={content.title}
            desc={content.desc}
        />
        )
      })}
        </div>
      </div>
    </div>
  )
}

export default History
