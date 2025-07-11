import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoute from "./route";
import { WorkoutProgramsProvider } from "./contexts/workoutPrograms.context";
const App = () => {
   return (
      <>
         <WorkoutProgramsProvider>
            <BrowserRouter>
               <Routes>
                  <Route path="/*" element={<AppRoute />} />
               </Routes>
            </BrowserRouter>
         </WorkoutProgramsProvider>
      </>
   )
}
export default App;