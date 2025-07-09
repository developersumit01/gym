import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";

const AppRoute=()=>{
   return (
      <Layout>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            {/* Add more routes as needed */}
         </Routes>
      </Layout>
   )
}
export default AppRoute