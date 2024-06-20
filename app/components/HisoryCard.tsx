
interface HistoryCardProps {
  time:string;
  place:string;
  title: string;
  desc: string;
}



const HisoryCard = ({time, place, title, desc}:HistoryCardProps) => {
  return (
    <div className="relative pl-5">
      <div className="bg-white shadow rounded-xl p-10 m-5">
        <h4 className="mb-2">{time}</h4>
        <h4>{place}</h4>
        <h3 className="font-bold mb-2">{title}</h3>
        <p>{desc}</p>
        <div className="absolute left-0 top-0 w-3 h-3 bg-green-300 rounded-full"></div>
      </div>
    </div>
  )
}

export default HisoryCard

