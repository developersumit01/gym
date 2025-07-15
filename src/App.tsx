import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoute from "./route";
import { WorkoutProgramsProvider } from "./contexts/workoutPrograms.context";
import { ProductsProvider } from "./contexts/product.context";
import { GallaryContextProvider } from "./contexts/gallery.context";
import { RecipesContextProvider } from "./contexts/recipes.context";
const App = () => {
   return (
      <>
         <RecipesContextProvider>
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
         </RecipesContextProvider>
      </>
   )
}
export default App;