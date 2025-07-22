import type React from "react";
import Button from "./button";
interface WorkoutProgramCardProps {
   image: string;
   text: string;
   onClick?:()=>void;
}
const WorkoutProgramCard: React.FC<WorkoutProgramCardProps> = ({ image, text, onClick }) => {
   return (<>
      <div className="w-[10rem] mx-auto">
         {/* workout card */}
         <div className="relative w-[10rem]">
            {/* image container */}
            <div className="h-[20rem] w-[10rem]">
               <img src={image} alt="" className='h-full w-full' />
            </div>
            {/* overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/75 flex items-center justify-start pt-8 vertical-rl rotate-180 text-xl font-semibold">{text}</div>
         </div>
         {/* button */}
         <div className="mt-4 flex items-center justify-center">
            <Button name='Start Today' onClick={onClick} />
         </div>
      </div>
   </>);
};
export default WorkoutProgramCard;