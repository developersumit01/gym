import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoute from "./route";
import { WorkoutProgramsProvider } from "./contexts/workoutPrograms.context";
import { ProductsProvider } from "./contexts/product.context";
const App = () => {
   return (
      <>
         <WorkoutProgramsProvider>
            <ProductsProvider>
               <BrowserRouter>
               <Routes>
                  <Route path="/*" element={<AppRoute />} />
               </Routes>
            </BrowserRouter>
            </ProductsProvider>
         </WorkoutProgramsProvider>
      </>
   )
}
export default App;