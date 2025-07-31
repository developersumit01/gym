import Button from "../../components/button";
import Input from "../../components/input";
import { Logo, ContactImage } from "../../assets/index";
import { useState } from "react";
import { useValidateInput } from "../../hooks/validator";
import { signUpFormSchema } from "../../schemas/signUpFrom.schema";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.hook";
const SignUp = () => {
   const navigate = useNavigate();
   const location =useLocation();
   const [ user, setUser ] = useState({
      name: "",
      email: "",
      phone: "",
      city: "",
      password: "",
   });
   const [_, setAuth] = useAuth();
   const [ isError, setIsError ] = useState(true);
   const [ error, setError ] = useState<any>({});
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUser({ ...user, [ name ]: value });
   };
   const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const [ errorMessage, isError ] = useValidateInput(e, signUpFormSchema);
      setError((prevError: any) => ({
         ...prevError,
         [ e.target.name ]: errorMessage || "",
      }));
      setIsError(isError);
   };
   const handleSubmit = () => {
      if (isError) {
         alert("Please fill the form correctly!");
         return;
      }
      localStorage.setItem("user", JSON.stringify(user));
      alert(`Thank you ${user.name} for signing up!`);
      setUser({
         name: "",
         email: "",
         phone: "",
         city: "",
         password: "",
      });
      setAuth(true);
      // Redirect to the home page or the page user was trying to access before signing up
      navigate(location.state?.from || "/", { replace: true });
   };
   return (
      <>
         <div className="max-w-layout mx-auto mt-16">
            <section className="px-4 md:px-8 py-8">
               <div className="w-full md:hidden flex justify-center items-center gap-3 mb-4 flex-col text-center">
                  <img src={Logo} alt="" className="w-24" loading="lazy" />
                  <div className="font-semibold text-3xl text-text">
                     Sign UP
                  </div>
               </div>
               <div className="text-primary md:text-text md:text-5xl text-2xl font-semibold mb-4">
                  Track Your Progress & More!
               </div>
               <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_500px] gap-4">
                  <div className="w-full md:max-w-2xl flex justify-center items-center md:p-4 p-1">
                     <form
                        className="flex flex-col gap-4 w-full"
                        action={handleSubmit}>
                        <Input
                           type="text"
                           onBlur={handleInputBlur}
                           value={user.name}
                           onChange={handleChange}
                           name="name"
                           placeholder="Enter Your Name"
                           error={error[ "name" ]}
                           onFocus={() => setError((prev: any) => ({ ...prev, name: "" }))}
                        />
                        <Input
                           type="text"
                           onBlur={handleInputBlur}
                           value={user.email}
                           onChange={handleChange}
                           name="email"
                           placeholder="Enter Your Email"
                           error={error[ "email" ]}
                           onFocus={() => setError((prev: any) => ({ ...prev, email: "" }))}
                        />
                        <Input
                           type="text"
                           onBlur={handleInputBlur}
                           value={user.phone}
                           onChange={handleChange}
                           name="phone"
                           placeholder="Enter Your Phone No."
                           error={error[ "phone" ]}
                           onFocus={() => setError((prev: any) => ({ ...prev, phone: "" }))}
                        />
                        <Input
                           type="text"
                           onBlur={handleInputBlur}
                           value={user.city}
                           onChange={handleChange}
                           name="city"
                           placeholder="Enter Your City"
                           error={error[ "city" ]}
                           onFocus={() => setError((prev: any) => ({ ...prev, city: "" }))}
                        />
                        <Input
                           type="password"
                           value={user.password}
                           onBlur={handleInputBlur}
                           onChange={handleChange}
                           name="password"
                           placeholder="Enter Your Password"
                           error={error[ "password" ]}
                           onFocus={() => setError((prev: any) => ({ ...prev, password: "" }))}
                        />
                        <Button name="Submit" className="text-text" />
                     </form>
                  </div>
                  <div className="md:pr-8 hidden md:block md:py-4">
                     <img
                        src={ContactImage}
                        alt=""
                        className="rounded-2xl md:w-full h-auto"
                        loading="lazy"
                     />
                  </div>
               </div>
            </section>
         </div>
      </>
   );
};
export default SignUp;
