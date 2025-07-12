import HeroSectionImage from "../assets/images/heroSectionImage.png";
import Button from "../components/button";
import { useContext } from "react";
import { WorkoutProgramsContext } from "../contexts/workoutPrograms.context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import WorkoutProgramCard from "../components/workoutProgramCard";
const Home = () => {
   const [ workoutPrograms ] = useContext(WorkoutProgramsContext);
   return (
      <>
         <main className="flex flex-col items-center md:justify-center justify-start bg-background text-text md:px-4">
            <div className="w-full max-w-layout flex items-start flex-col">
               {/* Hero section of home page start here */}
               <div className="relative bg-hero-image md:bg-none bg-cover bg-center flex flex-col items-center justify-center md:h-screen h-[64vh] md:mt-0 mt-[70px] md:px-0 px-4">
                  {/* Background Overlay with opacity */}
                  <div
                     className="absolute inset-0 bg-black/80 z-0"
                     aria-hidden="true"></div>

                  {/* Main Content */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-2">
                     <div className="flex flex-col items-start justify-center md:gap-12 gap-8">
                        <div>
                           <div className="text-4xl md:text-7xl mb-3">
                              make your
                           </div>
                           <div className="text-4xl md:text-7xl font-bold tracking-widest">
                              BODY SHAPE
                           </div>
                        </div>
                        <p className="text-lg">
                           Being physically active can improve your brain
                           health, help manage weight, reduce the risk of
                           disease, strengthen bones and muscles, and improve
                           your ability to do everyday activities.
                        </p>
                        <div>
                           <Button name="Get Started" />
                        </div>
                     </div>

                     <div className="items-center justify-center md:flex hidden">
                        <img src={HeroSectionImage} alt="Hero Section Image" />
                     </div>
                  </div>
               </div>
               {/* Hero section of home page end here */}
            </div>
         </main>
         {/* Programs List Start here */}
         <section className="bg-background text-text md:px-4">
            <div className="bg-background text-center text-text max-w-layout mx-auto">
               <div className="text-2xl md:text-3xl font-medium text-start ml-4 md:ml-0 mb-4">Free Workout Programs</div>
               <Swiper
                  navigation={true}
                  modules={[ Navigation ]}
                  slidesPerView={5}
                  spaceBetween={2}
                  loop={false}
                  breakpoints={{
                     300: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                     },
                     768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                     },
                     1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                     },
                     1280: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                     },
                  }}
                  className="md:!mx-0 !mx-4">
                  {workoutPrograms.map((program: any) => (
                     <SwiperSlide key={program.id}>
                        <WorkoutProgramCard
                           image={program.image}
                           text={program.text}
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </section>
         {/* Programs List End here */}
      </>
   );
};
export default Home;
