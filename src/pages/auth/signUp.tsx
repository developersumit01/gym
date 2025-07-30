import Button from "../../components/button";
import Input from "../../components/input";
import {Logo,ContactImage} from "../../assets/index";
import { useState } from "react";
const SignUp = () => {
   const [user,setUser]=useState({
      name: "",
      email: "",
      phone: "",
      city: "",
      password: ""
   });
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
   };
   const handleSubmit = () => {
      localStorage.setItem("user", JSON.stringify(user));
      alert("User Registered Successfully!");
   }
   return (
      <>
         <div className="max-w-layout mx-auto mt-16">
            <section className="px-4 md:px-8 py-8">
               <div className="w-full md:hidden flex justify-center items-center gap-3 mb-4 flex-col text-center">
                  <img src={Logo} alt="" className="w-24" loading="lazy" />
                  <div className="font-semibold text-3xl text-text">Sign UP</div>
               </div>
               <div className="text-primary md:text-text md:text-5xl text-2xl font-semibold mb-4">Track Your Progress & More!</div>
               <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_500px] gap-4">
                  <div className="w-full md:max-w-2xl flex justify-center items-center md:p-4 p-1">
                     <form className="flex flex-col gap-4 w-full" action={handleSubmit}>
                        <Input type="text" value={user.name} onChange={handleChange} name='name' placeholder="Enter Your Name" />
                        <Input type="text" value={user.email} onChange={handleChange} name='email' placeholder="Enter Your Email" />
                        <Input type="text" value={user.phone} onChange={handleChange} name='phone' placeholder="Enter Your Phone No." />
                        <Input type="text" value={user.city} onChange={handleChange} name='city' placeholder="Enter Your City" />
                        <Input type="password" value={user.password} onChange={handleChange} name='password' placeholder="Enter Your Password" />
                        <Button name='Submit' className='text-text' />
                     </form>
                  </div>
                  <div className="md:pr-8 hidden md:block md:py-4">
                     <img src={ContactImage} alt="" className='rounded-2xl md:w-full h-auto' loading="lazy" />
                  </div>
               </div>
            </section>
         </div>
      </>
   )
}
export default SignUp;