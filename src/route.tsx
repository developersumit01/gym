import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import { AboutCardContextProvider } from "./contexts/aboutCard.context";
import WorkoutPrograms from "./pages/workoutPrograms";
import Workout from "./components/workout";
import GallaryContextProvider from "./contexts/gallery.context";
import { ProductsProvider } from "./contexts/product.context";
import { WorkoutProgramsProvider } from "./contexts/workoutPrograms.context";
import { RecipesContextProvider } from "./contexts/recipes.context";
import SignUp from "./pages/auth/signUp";
import AuthGuard from "./guards/auth.gaurd";

const AppRoute = () => {
   return (
      <Layout>
         {/* Public routes start here */}
         <Routes>
            <Route path="auth/sign-up" element={<SignUp />} />
            <Route
               path=""
               element={
                  <GallaryContextProvider>
                     <ProductsProvider>
                        <WorkoutProgramsProvider>
                           <RecipesContextProvider>
                              <Home />
                           </RecipesContextProvider>
                        </WorkoutProgramsProvider>
                     </ProductsProvider>
                  </GallaryContextProvider>
               }
            />
            <Route
               path="about"
               element={
                  <AuthGuard>
                     <AboutCardContextProvider>
                        <About />
                     </AboutCardContextProvider>
                  </AuthGuard>
               }
            />
            <Route
               path="workout-programs/"
               element={
                  <WorkoutProgramsProvider>
                     <WorkoutPrograms />
                  </WorkoutProgramsProvider>
               }
            />
            <Route
               path="workout-programs/:workoutName/day/:day"
               element={<Workout />}
            />
            {/* Add more routes as needed */}
         </Routes>
         {/* Public route end here */}

         {/* Private route start here */}
         <Routes>
               <Route path="dashboard" />
         </Routes>
         {/* Private route end here */}
      </Layout>
   );
};
export default AppRoute;
