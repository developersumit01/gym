import type React from "react";

interface WorkoutCardProps{
   name:string,
   image:string,
}
const WorkoutCard:React.FC<WorkoutCardProps> = ({name,image}) =>{
   return (
      <>
         <div className="w-56 md:w-80 mx-auto h-60 md:h-96 rounded-2xl overflow-hidden relative group cursor-pointer">
            <img src={image} alt="" className="w-full" />
            <div className="absolute bg-overlay z-20 bottom-4 left-1/2 -translate-x-1/2 rounded-xl">
               <div className="flex gap-6">
                  <span className="bg-primary text-nowrap ml-2 mt-2 rounded-lg p-1 text-authText ">14 Days</span>
                  <span className="bg-primary text-nowrap mr-2 mt-2 rounded-lg p-1 text-authText ">20-40 mins</span>
               </div>
               <div className="m-2">{name}</div>
            </div>
            <div className="absolute inset-0 bg-overlay text-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out flex items-center justify-center text-2xl font-semibold">Let's Start</div>
         </div>
      </>
   )
}
export default WorkoutCard;