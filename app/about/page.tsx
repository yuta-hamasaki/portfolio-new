import Image from 'next/image';
import Header from '../components/Header';
import History from '../components/History';
import About from '../components/About'
import MidSection from '../components/MidSection';

const page = () => {
  return (
    <>
      <Header />
      <div className="h-auto pt-10">
        <div className="mt-20 md:px-36 px-5">
        <About/>
        </div>
        <MidSection/>
        <div className='bg-green-50'>
          <History />
        </div>
      </div>
    </>
  );
};

export default page;
