import HeroSectionImage from '../assets/images/heroSectionImage.png';
import Button from '../components/button';
const Home = () => {
   return (
      <>
         <main className="flex flex-col items-center md:justify-center justify-start min-h-screen bg-background text-text">
            <div className="max-w-layout flex items-start flex-col">
               {/* Hero section of home page start here */}
               <div className="relative bg-hero-image md:bg-none bg-cover bg-center flex flex-col items-center justify-center md:h-[100dvh] h-[64dvh] md:mt-0 mt-[70px] md:px-0 px-4">
                  {/* Background Overlay with opacity */}
                  <div className="absolute inset-0 bg-black/80 z-0" aria-hidden="true"></div>

                  {/* Main Content */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-2">
                     <div className="flex flex-col items-start justify-center md:gap-12 gap-8">
                        <div>
                           <div className='text-4xl md:text-7xl mb-3'>make your</div>
                           <div className='text-4xl md:text-7xl font-bold tracking-widest'>BODY SHAPE</div>
                        </div>
                        <p className='text-lg'>
                           Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities.
                        </p>
                        <div>
                           <Button name='Get Started' />
                        </div>
                     </div>

                     <div className="items-center justify-center md:flex hidden">
                        <img src={HeroSectionImage} alt="Hero Section Image" />
                     </div>
                  </div>
               </div>
               {/* Hero section of home page end here */}
               <div className="text-text">
                  <div className="text-4xl font-medium">Free Workout Programs</div>
                  {/* workout card container */}
                  <div className=""> 
                     {/* workout card */}
                     <div className="">
                        {/* image container */}
                        <div className="">
                           <img src="" alt="" />
                        </div>
                        {/* overlay */}
                        <div className=""></div>
                        {/* card text */}
                        <div className=""></div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </>
   );
};
export default Home;
