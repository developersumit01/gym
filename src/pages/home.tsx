import {HeroSectionImage} from "../assets/index";
import Button from "../components/button";
import { useContext } from "react";
import { WorkoutProgramsContext } from "../contexts/workoutPrograms.context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import WorkoutProgramCard from "../components/workoutProgramCard";
import { ProductsContext } from "../contexts/product.context";
import ProductCard from "../components/productCard";
import { GallaryContext } from "../contexts/gallery.context";
import { RecipesConrext } from "../contexts/recipes.context";
import { useNavigate } from "react-router-dom";
import Heading from "../components/heading";
import { WORKOUT_PROGRAMS } from "../routes";
const Home = () => {
   const navigate = useNavigate();
   const [ workoutPrograms ] = useContext(WorkoutProgramsContext);
   const [ products ] = useContext(ProductsContext);
   const [ gallery ] = useContext(GallaryContext);
   const recipes = useContext(RecipesConrext);
   const handleWorkoutStart = (workoutProgramName: string) => {
      navigate(`/${WORKOUT_PROGRAMS}`, { state: { sectionId: workoutProgramName } })
   }
   return (
      <>
         <main className="flex flex-col items-center md:justify-center justify-start bg-background text-text md:px-4">
            <div className="w-full max-w-layout flex items-start flex-col">
               {/* Hero section of home page start here */}
               <div className="relative bg-hero-image md:bg-none bg-cover bg-center flex flex-col items-center justify-center md:h-screen h-[64vh] md:mt-0 mt-[65px] md:px-0 px-4">
                  {/* Background Overlay with opacity */}
                  <div
                     className="absolute inset-0 bg-overlay z-0 md:hidden"
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
                        <img src={HeroSectionImage} alt="Hero Section Image" className="rounded-lg" loading="lazy" />
                     </div>
                  </div>
               </div>
               {/* Hero section of home page end here */}
            </div>
         </main>
         {/* Programs List Start here */}
         <section className="bg-background text-text md:px-4">
            <div className="bg-background text-center text-text max-w-layout mx-auto">
               <Heading headingName="Free Workout Programs" />
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
                           text={program.category}
                           onClick={() => { handleWorkoutStart(program.category) }}
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </section>
         {/* Programs List End here */}
         {/* Goods List Start here */}
         <section className="bg-background text-text md:px-4 pt-8">
            <div className="bg-background text-center text-text max-w-layout mx-auto">
               <Heading headingName="GOODS" buttonText="View All Products" />
               {/* card container */}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
                  {/* card */}
                  {products.map((product: any) => (
                     <ProductCard
                        id={product.id}
                        name={product.name}
                        image={product.image}
                     />
                  ))}
               </div>
            </div>
         </section>
         {/* Goods list end here */}
         {/* Gallery Section start here */}
         <section className="bg-background text-text md:px-4 pt-8">
            <div className="bg-background text-center text-text max-w-layout mx-auto">
               <Heading headingName="GALLERY" />
               <div className={`grid grid-cols-1 xs:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 px-4 md:px-0`}>
                  {gallery && gallery.map((image: string, index: number) => {
                     if (parseInt((index / 4).toString()) % 2 == 0) {
                        if (index % 2 == 1) {
                           return (
                              <img
                                 src={image}
                                 loading="lazy"
                                 className="object-cover w-full h-48 md:h-72 rounded-2xl xs:col-span-2"
                              />
                           );
                        } else {
                           return (
                              <img
                                 src={image}
                                 loading="lazy"
                                 className="object-cover w-full h-48 md:h-72 rounded-2xl xs:col-span-1"
                              />
                           );
                        }
                     } else {
                        if (index % 2 == 0) {
                           return (
                              <img
                                 src={image}
                                 loading="lazy"
                                 className="object-cover w-full h-48 md:h-72 rounded-2xl xs:col-span-2"
                              />
                           );
                        } else {
                           return (
                              <img
                                 src={image}
                                 loading="lazy"
                                 className="object-cover w-full h-48 md:h-72 rounded-2xl xs:col-span-1"
                              />
                           );
                        }
                     }
                  })}
               </div>
            </div>

         </section>
         {/* Gallery section end here */}
         {/* Recipes section start here */}
         <section className="bg-background text-text md:px-4 pt-8">
            <div className="max-w-layout mx-auto">
               {/* Title */}
               <Heading headingName="Recipes" buttonText="View More Recipes" />
               {/* recipes container start here */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_400px] pt-4 gap-14 px-4 md:px-0">
                  {/* Left section */}
                  {/* Display section */}
                  {
                     recipes(1).map((recipe: any) => {
                        return (
                           <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-4 items-center">
                              <div className="mx-auto md:mx-0">
                                 <img src={recipe.img} alt="" className="rounded-2xl max-h-[440px]" loading="lazy" />
                              </div>
                              <div className="">
                                 <div className="text-2xl md:text-3xl mb-4 font-semibold">{recipe.name}</div>
                                 <div className="mb-4">{recipe.description}</div>
                                 <Button name="View Full Recipe" />
                              </div>
                           </div>
                        );
                     })
                  }
                  {/* More listing section */}
                  <div className="md:flex md:flex-col md:justify-evenly md:gap-4">
                     {
                        recipes(4).map((recipe: any) => {
                           return (
                              <div className="flex items-center gap-4 mb-4">
                                 <img
                                    src={recipe.img}
                                    alt=""
                                    className="w-28 h-24 rounded-xl"
                                    loading="lazy"
                                 />
                                 <div>
                                    <div className="font-medium">{recipe.name}</div>
                                 </div>
                              </div>
                           );
                        })
                     }
                  </div>
               </div>
            </div>
         </section>
         {/* Recipes section end here */}
      </>
   );
};
export default Home;
