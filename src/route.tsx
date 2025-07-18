import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import { AboutCardContextProvider } from "./contexts/aboutCard.context";

const AppRoute = () => {
   return (
      <Layout>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutCardContextProvider><About /></AboutCardContextProvider>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            {/* Add more routes as needed */}
         </Routes>
      </Layout>
   )
}
export default AppRoute