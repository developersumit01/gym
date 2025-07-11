import React, { createContext, useState } from "react";
import CardioImage from "../assets/images/cardio.png";
import GroupImage from "../assets/images/group.png";
import YogaImage from "../assets/images/yoga.png";
interface WorkoutProgram {
   children?: React.ReactNode;
}
export const WorkoutProgramsContext = createContext('' as any);
export const WorkoutProgramsProvider: React.FC<WorkoutProgram> = ({ children }) => {
   const [ value, setValue ] = useState([
      {
         text: 'Beginner Friendly',
         image: YogaImage,
         id: '1',
      },
      {
         text: 'Moderate to Advanced',
         image: GroupImage,
         id: '2',
      },
      {
         text: 'Strength Training',
         image: CardioImage,
         id: '3',
      },
      {
         text: 'Weight Loss Focus',
         image: YogaImage,
         id: '4',
      },
      {
         text: 'Muscle Building',
         image: GroupImage,
         id: '5',
      },
      {
         text: 'Cardio Intensive',
         image: CardioImage,
         id: '6',
      },
      {
         text: 'Functional Fitness',
         image: YogaImage,
         id: '7',
      },
      // {
      //    text: 'HIIT & Conditioning',
      //    image: GroupImage,
      //    id: '8',
      // },
   ]);
   return (
      <WorkoutProgramsContext.Provider value={[value, setValue]}>
         {children}
      </WorkoutProgramsContext.Provider>
   );
};