import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoute from "./route";
import ScrollTop from "./components/scrollTop";
import AuthContextProvider from "./contexts/auth.context";
const App = () => {
   return (
      <>

         <BrowserRouter>
            <ScrollTop />
            <Routes>
               <Route path="/*" element={<AuthContextProvider><AppRoute /></AuthContextProvider>} />
            </Routes>
         </BrowserRouter>
      </>
   )
}
export default App;