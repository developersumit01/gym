import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import HamburgerIcon from "../assets/icons/hamburger.svg";
import { useState } from "react";
const Header = () => {
   const [ isHeaderOpen, setIsHeaderOpen ] = useState<boolean>(false);
   return (
      <>
         <header className="flex fixed z-40 top-0 left-0 w-full justify-between items-center p-2 bg-background text-text border-b border-primary md:px-4">
            <div className="max-w-layout mx-auto flex justify-between items-center w-full">
               <div className="w-12">
                  <NavLink to={"/"}><img src={Logo} alt="" /></NavLink>
               </div>
               <nav className="hidden md:flex space-x-4 text-lg font-semibold">
                  <NavLink className="px-2" to="/">Home</NavLink>
                  <NavLink className="px-2" to="/about">About</NavLink>
                  <NavLink className="px-2" to="/workout-programs">Workout Programs</NavLink>
                  <NavLink className="px-2" to="/recipes">Recipes</NavLink>
                  <NavLink className="px-2" to="/store">Store</NavLink>
                  <NavLink className="px-2" to="/login">Login</NavLink>
                  <NavLink className="px-2" to="/sign-up">Sign up</NavLink>
               </nav>
            </div>
            <div className="md:hidden">
               <button onClick={() => { setIsHeaderOpen(!isHeaderOpen) }} className="w-10 h-10 flex justify-center items-center">
                  <img src={HamburgerIcon} alt="Menu" />
               </button>
            </div>
         </header>
       <header className={`flex flex-col fixed h-[calc(100dvh-64px)] z-50 top-16 md:hidden justify-start items-start px-2 bg-background text-text font-semibold overflow-hidden transition-all duration-300 ease-in-out ${isHeaderOpen ? 'max-w-[100dvw] opacity-100 translate-y-0' : 'max-w-0 opacity-0 -translate-y-2'}`}>
            <NavLink to="/" className="w-full py-1 px-2 focus-bg-fill">Home</NavLink>
            <NavLink to="/about" className="w-full py-1 px-2 focus-bg-fill">About</NavLink>
            <NavLink to="/workout-programs" className="w-full py-1 px-2 focus-bg-fill">Workout Programs</NavLink>
            <NavLink to="/recipes" className="w-full py-1 px-2 focus-bg-fill">Recipes</NavLink>
            <NavLink to="/store" className="w-full py-1 px-2 focus-bg-fill">Store</NavLink>
            <NavLink to="/login" className="w-full py-1 px-2 focus-bg-fill">Login</NavLink>
            <NavLink to="/sign-up" className="w-full py-1 px-2 focus-bg-fill">Sign up</NavLink>
         </header>
      </>
   )
}
export default Header