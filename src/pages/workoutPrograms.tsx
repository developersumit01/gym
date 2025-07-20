import { useContext } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { WorkoutProgramsContext } from "../contexts/workoutPrograms.context";
import WorkoutProgramCard from "../components/workoutProgramCard";
import WorkoutCard from "../components/workoutCard";

const WorkoutPrograms = () => {
   const [ workoutPrograms ] = useContext(WorkoutProgramsContext);
   return (
      <>
         <section className="mt-[64px] bg-background text-text max-w-layout mx-auto pt-6">
            <div className="text-3xl font-semibold md:text-4xl mb-4">Free Workout Programs</div>
            <div className="w-full">
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
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </section>
         {
            workoutPrograms.map((workoutProgram: any) => {
               return (
                  <section className="mt-8 bg-background text-text max-w-layout mx-auto pt-2">
                     <div className="text-2xl font-medium text-primary ml-4 md:ml-0 mb-4 text-start">/// {workoutProgram.category}</div>
                     <div className="w-full">
                        <Swiper
                           navigation={true}
                           modules={[ Navigation ]}
                           slidesPerView={3}
                           spaceBetween={2}
                           loop={false}
                           breakpoints={{
                              300: {
                                 slidesPerView: 1,
                                 spaceBetween: 20,
                              },
                              500: {
                                 slidesPerView: 2,
                                 spaceBetween: 30,
                              },
                              1080: {
                                 slidesPerView: 3,
                                 spaceBetween: 30,
                              },
                           }}
                           className="md:!mx-0 !mx-4">
                           {workoutProgram.items.map((ele: any, index: any) => (
                              <SwiperSlide key={index}>
                                 <WorkoutCard image={ele.img} name={ele.name} />
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>
                  </section>
               )
            })
         }
      </>
   )
}
export default WorkoutPrograms;