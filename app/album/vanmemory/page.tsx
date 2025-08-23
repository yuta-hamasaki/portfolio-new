import PhotoCard from '@/components/PhotoCard';
import Footer from '@/components/Footer';

const imageData = [
  'https://gallary-lovat.vercel.app/vanphoto/van1.JPG',
  'https://gallary-lovat.vercel.app/vanphoto/19.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/24.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/12.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/13.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/14.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/15.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/16.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/17.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/18.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/20.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/21.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/22.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/23.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/25.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/26.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/van10.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/van11.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/van2.JPG',
  'https://gallary-lovat.vercel.app/vanphoto/van3.JPG',
  'https://gallary-lovat.vercel.app/vanphoto/van4.JPG',
  'https://gallary-lovat.vercel.app/vanphoto/van5.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/van6.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/van7.jpg',
  'https://gallary-lovat.vercel.app/vanphoto/van8.jpg'
];

export default function page() {
  return (
    <>
    <div className="w-screen h-screen p-2 flex flex-col items-center overflow-hidden">
      <h2 className='mt-10 text-center font-bold text-3xl'>Memory In Vancouver 🇨🇦</h2>
        <p className="mt-3 animate-bounce">
          ↓Click the photo!
        </p>
      <PhotoCard imageData={imageData}></PhotoCard>
    </div>
    <Footer/>
    </>
  )
}
