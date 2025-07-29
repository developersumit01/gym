import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/logo.png";
import HamburgerIcon from "../assets/icons/hamburger.svg";
import Button from "./button";
import * as routes from "../absolute-routes";
const Header = () => {
   const [ isHeaderOpen, setIsHeaderOpen ] = useState<boolean>(false);
   const navigate = useNavigate()
   return (
      <>
         <header className="flex fixed z-40 top-0 left-0 w-full justify-between items-center p-2 bg-header-background text-text md:px-4">
            <div className="max-w-layout mx-auto flex justify-between items-center w-full">
               <div className="w-12">
                  <NavLink to={routes.HOME}><img src={Logo} alt="" className="ml-1" /></NavLink>
               </div>
               <nav className="hidden md:flex space-x-4 text-lg font-semibold items-center">
                  <NavLink className="px-2" to={routes.HOME}>Home</NavLink>
                  <NavLink className="px-2" to={routes.ABOUT}>About</NavLink>
                  <NavLink className="px-2" to={routes.WORKOUT_PROGRAMS}>Workout Programs</NavLink>
                  <NavLink className="px-2" to={routes.LOGIN}>Login</NavLink>
                  <Button name="Sign up" onClick={() => { navigate(routes.SIGN_UP) }} />
                  {/* <NavLink className="px-2" to="/recipes">Recipes</NavLink>
                  <NavLink className="px-2" to="/store">Store</NavLink> */}

               </nav>
            </div>
            <div className="md:hidden mr-1">
               <button onClick={() => { setIsHeaderOpen(!isHeaderOpen) }} className="w-10 h-10 flex justify-center items-center">
                  <img src={HamburgerIcon} alt="Menu" />
               </button>
            </div>
         </header>
         {/* This is the overlay behind the nav bar */}
         <div className={`fixed h-[calc(100dvh-64px)] z-50 bg-overlay w-full bottom-0 ${!isHeaderOpen && '!hidden'}`} onClick={() => { setIsHeaderOpen(!isHeaderOpen) }}></div>
         <header className={`flex flex-col fixed h-[calc(100dvh-64px)] z-50 top-16 right-0 md:hidden justify-start items-start px-2 bg-header-background text-text font-semibold overflow-hidden transition-[width,opacity,transform] duration-300 ease-in-out gap-2 ${isHeaderOpen
            ? 'opacity-100 translate-y-0 w-1/2'
            : 'w-0 opacity-0 -translate-y-2'
            }`}>
            <NavLink to={routes.HOME} className="w-full py-1 px-2 focus-bg-fill">Home</NavLink>
            <NavLink to={routes.ABOUT} className="w-full py-1 px-2 focus-bg-fill">About</NavLink>
            <NavLink to={routes.WORKOUT_PROGRAMS} className="w-full py-1 px-2 focus-bg-fill">Workout Programs</NavLink>
            <NavLink className="w-full py-1 px-2 focus-bg-fill" to={routes.LOGIN}>Login</NavLink>
            <Button name="Sign up" onClick={() => { navigate(routes.SIGN_UP) }} />
            {/* <NavLink to="/recipes" className="w-full py-1 px-2 focus-bg-fill">Recipes</NavLink>
            <NavLink to="/store" className="w-full py-1 px-2 focus-bg-fill">Store</NavLink>
            <NavLink to="/login" className="w-full py-1 px-2 focus-bg-fill">Login</NavLink>
            <NavLink to="/sign-up" className="w-full py-1 px-2 focus-bg-fill">Sign up</NavLink> */}
         </header>
      </>
   )
}
export default Header