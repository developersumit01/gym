import React, { createContext, useState } from "react";
import CardioImage from "../assets/images/workoutPrograms/cardio.png";
import GroupImage from "../assets/images/workoutPrograms/group.png";
import YogaImage from "../assets/images/workoutPrograms/yoga.png";
import Image1 from "../assets/images/workoutPrograms/image1.png";
import Image2 from "../assets/images/workoutPrograms/image2.png";
import Image3 from "../assets/images/workoutPrograms/image3.png";
import Image4 from "../assets/images/workoutPrograms/image4.png";
import Image5 from "../assets/images/workoutPrograms/image5.png";
import Image6 from "../assets/images/workoutPrograms/image6.png";
import Image7 from "../assets/images/workoutPrograms/image7.png";
import Image8 from "../assets/images/workoutPrograms/image8.png";
import Image9 from "../assets/images/workoutPrograms/image9.png";
import Image10 from "../assets/images/workoutPrograms/image10.png";
import Image11 from "../assets/images/workoutPrograms/image11.png";
import Image12 from "../assets/images/workoutPrograms/image12.png";
import Image13 from "../assets/images/workoutPrograms/image13.png";
import Image14 from "../assets/images/workoutPrograms/image14.png";
import Image15 from "../assets/images/workoutPrograms/image15.png";
import Image16 from "../assets/images/workoutPrograms/image16.png";
import Image17 from "../assets/images/workoutPrograms/image17.png";
import Image18 from "../assets/images/workoutPrograms/image18.png";
import Image19 from "../assets/images/workoutPrograms/image19.png";
import { filterWorkoutData } from "./workout.tsx";
interface WorkoutProgram {
   children?: React.ReactNode;
}
export const WorkoutProgramsContext = createContext('' as any);
export const WorkoutProgramsProvider: React.FC<WorkoutProgram> = ({ children }) => {
   const images = [
      Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9,
      Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17,
      Image18, Image19
   ];
   function getRandomImage() {
      return images[ Math.floor(Math.random() * images.length) ];
   }
   const [ value ] = useState([
      {
         category: 'Beginner Friendly',
         image: YogaImage,
         peopleTried: 1973,
         items: [
            { name: 'Wall Push-Ups', img: getRandomImage() },
            { name: 'Bodyweight Squats', img: getRandomImage() },
            { name: 'Standing Marches', img: getRandomImage() },
            { name: 'Chair-Assisted Lunges', img: getRandomImage() },
            { name: 'Shoulder Rolls', img: getRandomImage() },
            { name: 'Neck Tilts', img: getRandomImage() },
            { name: 'Seated Knee Lifts', img: getRandomImage() }
         ]
      },
      {
         category: 'Moderate to Advanced',
         image: CardioImage,
         peopleTried: 6289,
         items: [
            { name: 'Push-Ups', img: getRandomImage() },
            { name: 'Jump Squats', img: getRandomImage() },
            { name: 'Mountain Climbers', img: getRandomImage() },
            { name: 'Burpees', img: getRandomImage() },
            { name: 'Plank to Push-Up', img: getRandomImage() },
            { name: 'Reverse Lunges', img: getRandomImage() },
            { name: 'Side Planks', img: getRandomImage() }
         ]
      },
      {
         category: 'Strength Training',
         image: GroupImage,
         peopleTried: 1837,
         items: [
            { name: 'Weighted Squats', img: getRandomImage() },
            { name: 'Dumbbell Rows', img: getRandomImage() },
            { name: 'Overhead Press', img: getRandomImage() },
            { name: 'Deadlifts', img: getRandomImage() },
            { name: 'Push Press', img: getRandomImage() },
            { name: 'Bulgarian Split Squats', img: getRandomImage() },
            { name: 'Pull-Ups', img: getRandomImage() }
         ]
      },
      {
         category: 'Weight Loss Focus',
         image: YogaImage,
         peopleTried: 1739,
         items: [
            { name: 'Jumping Jacks', img: getRandomImage() },
            { name: 'High Knees', img: getRandomImage() },
            { name: 'Burpees', img: getRandomImage() },
            { name: 'Mountain Climbers', img: getRandomImage() },
            { name: 'Skipping Rope', img: getRandomImage() },
            { name: 'Fast Feet Shuffle', img: getRandomImage() },
            { name: 'Speed Skaters', img: getRandomImage() }
         ]
      },
      {
         category: 'Muscle Building',
         image: CardioImage,
         peopleTried: 1283,
         items: [
            { name: 'Barbell Squats', img: getRandomImage() },
            { name: 'Bench Press', img: getRandomImage() },
            { name: 'Barbell Rows', img: getRandomImage() },
            { name: 'Pull-Ups', img: getRandomImage() },
            { name: 'Leg Press', img: getRandomImage() },
            { name: 'Shoulder Press', img: getRandomImage() },
            { name: 'Bicep Curls', img: getRandomImage() }
         ]
      },
      {
         category: 'Cardio Intensive',
         image: YogaImage,
         peopleTried: 2849,
         items: [
            { name: 'Jump Rope', img: getRandomImage() },
            { name: 'Box Jumps', img: getRandomImage() },
            { name: 'Sprint Intervals', img: getRandomImage() },
            { name: 'Cycling', img: getRandomImage() },
            { name: 'Treadmill Run', img: getRandomImage() },
            { name: 'Jumping Lunges', img: getRandomImage() },
            { name: 'Shadow Boxing', img: getRandomImage() }
         ]
      },
      {
         category: 'Functional Fitness',
         image: CardioImage,
         peopleTried: 2948,
         items: [
            { name: 'Kettlebell Swings', img: getRandomImage() },
            { name: 'Farmer’s Walk', img: getRandomImage() },
            { name: 'Step-Ups', img: getRandomImage() },
            { name: 'Medicine Ball Slams', img: getRandomImage() },
            { name: 'Lateral Bounds', img: getRandomImage() },
            { name: 'Bear Crawls', img: getRandomImage() },
            { name: 'Get-Ups', img: getRandomImage() }
         ]
      },
      {
         category: 'HIIT & Conditioning',
         image: GroupImage,
         peopleTried: 4929,
         items: [
            { name: 'Burpees', img: getRandomImage() },
            { name: 'Squat Jumps', img: getRandomImage() },
            { name: 'Plank Jacks', img: getRandomImage() },
            { name: 'Jump Lunges', img: getRandomImage() },
            { name: 'Battle Ropes', img: getRandomImage() },
            { name: 'Rowing Machine', img: getRandomImage() },
            { name: 'Jump Rope Intervals', img: getRandomImage() }
         ]
      }
   ]);

   return (
      <WorkoutProgramsContext.Provider value={[ value, filterWorkoutData ]}>
         {children}
      </WorkoutProgramsContext.Provider>
   );
};