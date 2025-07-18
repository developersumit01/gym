import { useContext } from 'react';
import AboutBackgroundImage from '../assets/images/aboutBackground.png';
import Button from '../components/button';
import { AboutCardContext } from '../contexts/aboutCard.context';
import SmileyIcon from '../assets/icons/smiley.svg';
const About = () => {
   const [ aboutCardData ] = useContext(AboutCardContext);
   return (<>
      <section className='relative w-full h-[80vh] md:h-screen flex text-text'>
         <div className="max-w-layout mx-auto">
            {/* Background image section of the about page start */}
            <img src={AboutBackgroundImage} alt="About section background image" className='absolute inset-0 z-0 h-full w-full object-cover' />
            <div className="absolute inset-0 bg-overlay w-full h-full z-10"></div>
            {/* Content section of the about page start */}
            <section className="z-20 flex flex-col items-start justify-center text-center px-4 md:max-w-2/3 mt-[65px]">
               <div className="text-3xl md:text-7xl mb-3 z-20 text-start">get more out of your</div>
               <div className="text-3xl md:text-7xl font-bold md:tracking-widest text-start z-20">Fitness Journey</div>
               <p className='z-20 text-start my-6'>Join the community to track your progress</p>
               <p className='text-start z-20 md:max-w-[60%]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
               <Button name='Create Account' className='z-20 my-6' />
            </section>
         </div>
      </section>
      {/* About page card section start here */}
      <section className='w-full bg-background py-16'>
         <div className='relative -mt-48 px-4 z-20'>
         <div className=" max-w-layout mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
               aboutCardData.map((card: any, index: number) => (
                  <div key={index} className="bg-overlay p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                     <div className="flex items-center justify-center mb-4">
                        <img src={SmileyIcon} alt='smiley icon' />
                     </div>
                     <p className="text-text text-center mb-4">{card}</p>
                  </div>
               ))
            }
         </div>
      </div>
      </section>
      {/* About page card section end here */}
   </>)
}
export default About;