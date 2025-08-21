
import Header from '../../components/Header';
import History from '../../components/History';
import About from '../../components/About'

const page = () => {
  return (
    <>
      <Header />
      <div className="h-auto pt-10 pb-2">
        <div className="mt-20 md:px-36 px-5">
        <About/>
        </div>
        <div className='bg-green-50'>
          <History />
        </div>
      </div>
    </>
  );
};

export default page;
