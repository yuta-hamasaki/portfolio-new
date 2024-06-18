import Image from 'next/image';
import Header from '../components/Header';
import History from '../components/History';
import About from '../components/About'

const page = () => {
  return (
    <>
      <Header />
      <div className="h-auto pt-10 bg-blue-50">
        <About/>
        <div className=''>
          <History />
        </div>

      </div>
    </>
  );
};

export default page;
