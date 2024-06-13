import Header from '../components/Header'

const page = () => {
  return (
    <>
    <Header/>
    <div className="h-screen pt-10 bg-green-50">
      <div className="pt-16 flex justify-center">
        <h2 className="font-bold text-xl">About Me</h2>
      </div>
    </div>
    </>
  )
}

export default page
