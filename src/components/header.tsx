import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Logo } from "../assets/index";
import { HamburgerIcon } from "../assets/icons/index";
import Button from "./button";
import * as routes from "../absolute-routes";
import useAuth from "../hooks/useAuth.hook";
import { logout } from "../utils/auth";
const Header = () => {
   const [ isHeaderOpen, setIsHeaderOpen ] = useState<boolean>(false);
   const [ isProfileMenuOpen, setIsProfileMenuOpen ] = useState<boolean>(false);
   const navigate = useNavigate()
   const [ auth, setAuth ] = useAuth();
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
                  {
                     !auth && <>
                        <NavLink className="px-2" to={routes.LOGIN}>Login</NavLink>
                        <Button name="Sign up" onClick={() => { navigate(routes.SIGN_UP) }} />
                     </>
                  }
                  {
                     auth && <div className="px-2 cursor-pointer">
                        <div className="relative">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8" onClick={() => { setIsProfileMenuOpen(!isProfileMenuOpen) }}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                           </svg>
                           <div className={`absolute right-0 rounded-md mt-1 bg-overlay p-4 flex flex-col justify-center items-start text-md overflow-hidden transition-[opacity,transform] duration-300 ease-in-out 
                           ${isProfileMenuOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}`}>
                              <div onClick={() => { setIsProfileMenuOpen(!isProfileMenuOpen) }} className="text-nowrap px-[2px] border-b w-full text-text">Sumit Kumar</div>
                              <NavLink to={routes.PROFILE} onClick={() => { setIsProfileMenuOpen(!isProfileMenuOpen) }} className="text-nowrap pt-2 px-[2px] border-b w-full hover:text-primary hover:border-b-primary text-text">Profile</NavLink>
                              <div onClick={() => { setIsProfileMenuOpen(!isProfileMenuOpen); logout(); setAuth(false) }} className="text-nowrap pt-2 px-[2px] border-b w-full hover:text-primary hover:border-b-primary text-text">logout</div>
                           </div>
                        </div>

                     </div>
                  }
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
            {
               !auth && <>
                  <NavLink className="w-full py-1 px-2 focus-bg-fill" to={routes.LOGIN}>Login</NavLink>
                  <Button name="Sign up" onClick={() => { navigate(routes.SIGN_UP) }} />
               </>
            }
            {/* <NavLink to="/recipes" className="w-full py-1 px-2 focus-bg-fill">Recipes</NavLink>
            <NavLink to="/store" className="w-full py-1 px-2 focus-bg-fill">Store</NavLink>
            <NavLink to="/login" className="w-full py-1 px-2 focus-bg-fill">Login</NavLink>
            <NavLink to="/sign-up" className="w-full py-1 px-2 focus-bg-fill">Sign up</NavLink> */}
         </header>
      </>
   )
}
export default Header