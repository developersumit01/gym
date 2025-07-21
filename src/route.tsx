import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import { AboutCardContextProvider } from "./contexts/aboutCard.context";
import WorkoutPrograms from "./pages/workoutPrograms";
import Workout from "./components/workout";

const AppRoute = () => {
   return (
      <Layout>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutCardContextProvider><About /></AboutCardContextProvider>} />
            <Route path="/workout-programs" element={<WorkoutPrograms />} />
            <Route path="/workout-programs/:workoutName" element={<Workout />} />
            {/* Add more routes as needed */}
         </Routes>
      </Layout>
   )
}
export default AppRoute