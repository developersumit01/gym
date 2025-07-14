import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoute from "./route";
import { WorkoutProgramsProvider } from "./contexts/workoutPrograms.context";
import { ProductsProvider } from "./contexts/product.context";
import { GallaryContextProvider } from "./contexts/gallery.context";
const App = () => {
   return (
      <>
         <GallaryContextProvider>
            <WorkoutProgramsProvider>
               <ProductsProvider>
                  <BrowserRouter>
                     <Routes>
                        <Route path="/*" element={<AppRoute />} />
                     </Routes>
                  </BrowserRouter>
               </ProductsProvider>
            </WorkoutProgramsProvider>
         </GallaryContextProvider>
      </>
   )
}
export default App;