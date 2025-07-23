import { NavLink, useLocation, useParams } from "react-router-dom";
import { filterWorkoutData } from "../contexts/workout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Workout = () => {
   const { workoutName, day } = useParams();
   const [ workoutData ] = filterWorkoutData(workoutName);
   const location = useLocation();
   const {image}=location.state||{}

   return (
      <>
         <section className="max-w-layout mx-auto mt-16 text-text pt-12">
            {/*  */}
            <div className="grid grid-cols-1 pad:grid-cols-[400px_calc(100%-440px)] gap-8 px-4 sm:px-8 pad:px-0">
               <div className="grid grid-cols-1 xs:grid-cols-[250px_1fr] pad:grid-cols-1 gap-8  pad:px-4">
                  <div className="min-h-[400px] overflow-hidden rounded-2xl">
                     <img src={image} alt="" className="object-cover w-full h-full" />
                  </div>
                  <div className="sm:pt-4">
                     <div className="pad:hidden text-3xl font-semibold pt-2 px-2">{workoutData.name}</div>
                     <p className=" pt-2 px-2">{workoutData.motivation}</p>
                  </div>
               </div>
               {/* flex flex-col */}
               <div className="flex flex-col gap-8">
                  <div className="text-3xl font-semibold pt-2 px-2 hidden pad:inline-block">{workoutData.name}</div>
                  <div className="px-5 py-4 bg-overlay rounded-2xl">
                     <Swiper
                        navigation={true}
                        modules={[ Navigation ]}
                        slidesPerView={6}
                        spaceBetween={2}
                        loop={false}
                        breakpoints={{
                           300: {
                              slidesPerView: 4,
                              spaceBetween: 20,
                           },
                           600: {
                              slidesPerView: 6,
                              spaceBetween: 20,
                           },
                           768: {
                              slidesPerView: 7,
                              spaceBetween: 20,
                           },
                        }}
                     >
                        {
                           workoutData.workout.map((program: any, index: number) => (
                              <SwiperSlide key={program.id} style={{ width: '56px', display: 'flex', justifyContent: 'center' }}>
                                 <NavLink to={`/workout-programs/${workoutName}/day/${index + 1}`} state={{image:image}} className={({ isActive }) =>
                                    `w-14 h-12 text-nowrap cursor-pointer text-authText flex justify-center items-center rounded-xl font-semibold ${isActive ? "bg-primary" : "bg-text"
                                    }`
                                 }>
                                    Day {index + 1}
                                 </NavLink>
                              </SwiperSlide>
                           ))
                        }
                     </Swiper>

                  </div>
                  <div className="basis-full px-8 py-6 bg-overlay rounded-2xl relative flex justify-between flex-col gap-4">
                     <div className="absolute h-[calc(100%-115px)] w-[1px] bg-white flex flex-col justify-between items-center top-1/2 bottom-1/2 -translate-y-1/2">
                        {
                           workoutData.workout[ parseInt(day ?? "0", 10)-1 ].map((_: any) => <div className="h-8 w-8 rounded-full flex justify-center items-center bg-darkBackground"><span className="h-5 w-5 rounded-full bg-white inline-block"></span></div>)
                        }
                     </div>
                     {
                        workoutData.workout[ parseInt(day ?? "0", 10)-1 ].map((ele: any) => {
                           return <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] ml-8">
                              <div className="md:w-40 md:h-24 w-32 h-16">
                                 <img src={ele.img} alt="" className="h-full w-full object-fill" />
                              </div>
                              <div className="flex flex-col justify-center items-start gap-2">
                                 <div className="text-lg font-semibold">{ele.name}</div>
                                 <p>{ele.description}</p>
                              </div>
                           </div>
                        })
                     }
                  </div>
               </div>
            </div>
         </section >
      </>
   )
}
export default Workout;