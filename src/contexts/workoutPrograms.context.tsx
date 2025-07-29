import React, { createContext, useState } from "react";
import * as workoutImages from "../assets/images/workoutPrograms.images.tsx"
import { filterWorkoutData } from "./workout.tsx";
interface WorkoutProgram {
   children?: React.ReactNode;
}
export const WorkoutProgramsContext = createContext('' as any);
export const WorkoutProgramsProvider: React.FC<WorkoutProgram> = ({ children }) => {
   const images = [
      workoutImages.Image1, workoutImages.Image2, workoutImages.Image3, workoutImages.Image4, workoutImages.Image5, workoutImages.Image6, workoutImages.Image7, workoutImages.Image8, workoutImages.Image9,
      workoutImages.Image10, workoutImages.Image11, workoutImages.Image12, workoutImages.Image13, workoutImages.Image14, workoutImages.Image15, workoutImages.Image16, workoutImages.Image17,
      workoutImages.Image18, workoutImages.Image19
   ];
   function getRandomImage() {
      return images[ Math.floor(Math.random() * images.length) ];
   }
   const [ value ] = useState([
      {
         category: 'Beginner Friendly',
         image: workoutImages.YogaImage,
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
         image: workoutImages.CardioImage,
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
         image: workoutImages.GroupImage,
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
         image: workoutImages.YogaImage,
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
         image: workoutImages.CardioImage,
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
         image: workoutImages.YogaImage,
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
         image: workoutImages.CardioImage,
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
         image: workoutImages.GroupImage,
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