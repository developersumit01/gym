import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import HamburgerIcon from "../assets/icons/hamburger.svg";
const Header = () => {
   return (
      <>
         <header className="flex justify-between items-center p-2 bg-background text-text">
            <div className="max-w-layout mx-auto flex justify-between items-center w-full">
               <div className="w-12">
                  <NavLink to={"/"}><img src={Logo} alt="" /></NavLink>
               </div>
               <nav className="hidden md:flex space-x-6 text-lg font-semibold">
                  <NavLink to="">Home</NavLink>
                  <NavLink to="">About</NavLink>
                  <NavLink to="">Workout Programs</NavLink>
                  <NavLink to="">Recipes</NavLink>
                  <NavLink to="">Store</NavLink>
                  <NavLink to="">Login</NavLink>
                  <NavLink to="">Sign up</NavLink>
               </nav>
            </div>
            <div className="md:hidden">
               <button className="w-10 h-10 flex justify-center items-center">
                  <img src={HamburgerIcon} alt="Menu" />
               </button>
            </div>
         </header>
         <header className="flex md:hidden justify-between items-start px-2 bg-background text-text font-semibold flex-col">
            <NavLink to="" className="w-full border-y py-2 pl-2 focus-bg-fill">Home</NavLink>
            <NavLink to="" className="w-full border-b py-2 pl-2 focus-bg-fill">About</NavLink>
            <NavLink to="" className="w-full border-b py-2 pl-2 focus-bg-fill">Workout Programs</NavLink>
            <NavLink to="" className="w-full border-b py-2 pl-2 focus-bg-fill">Recipes</NavLink>
            <NavLink to="" className="w-full border-b py-2 pl-2 focus-bg-fill">Store</NavLink>
            <NavLink to="" className="w-full border-b py-2 pl-2 focus-bg-fill">Login</NavLink>
            <NavLink to="" className="w-full border-b py-2 pl-2 focus-bg-fill">Sign up</NavLink>
         </header>
      </>
   )
}
export default Header