import Image from 'next/image';
import Header from '../components/Header';
import History from '../components/History';

const page: React.FC = () => {
  return (
    <>
      <Header />
      <div className="h-auto pt-10 bg-green-50">
        <div className="p-5 pt-16 flex justify-center flex-col items-center">
          <h2 className="font-bold text-2xl text-center mb-4">About Me</h2>
          <div className="flex md:flex-row flex-col justify-center items-center p-2">
            {/* Uncomment and adjust the Image component below if you want to display an image */}
            {/* <Image 
              src="https://example.com/your-image.jpg" 
              alt="My pic" 
              className="h-auto md:ml-10 md:w-2/5 w-3/5 rounded-lg shadow-lg"
            /> */}
            <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at 
                nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec 
                tellus sed augue semper porta. Mauris massa.
              </p>
            </div>
          </div>
        </div>
        <div className=''>
              <History />
        </div>

      </div>
    </>
  );
};

export default page;
