import Button from "../../components/button";
import Input from "../../components/input";
import { Logo, ContactImage } from "../../assets/index.tsx";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { SIGN_UP, FORGET_PASSWORD } from "../../absolute-routes";
import { useState } from "react";
import { useValidateInput } from "../../hooks/validator.ts";
import { loginSchema } from "../../schemas/login.schema.ts";
import { login } from "../../utils/auth.ts";
import {useAuth} from "../../hooks/useAuth.hook";
const Login = () => {
   const [ user, setUser ] = useState({
      email: "",
      password: "",
   });
   const [ isError, setIsError ] = useState(true);
   const [ _, setAuth ] = useAuth();
   const [ error, setError ] = useState<any>({});
   const navigate = useNavigate();
   const location = useLocation();
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUser({ ...user, [ name ]: value });
   };
   const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setError((prevError: any) => ({
         ...prevError,
         [ e.target.name ]: "",
      }));
   };
   const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const [ errorMessage, isError ] = useValidateInput(e, loginSchema);
      setError((prevError: any) => ({
         ...prevError,
         [ e.target.name ]: errorMessage || "",
      }));
      setIsError(isError);
   };
   const handleSubmit = () => {
      if (isError&&!error) {
         alert("Please fill the form correctly!");
         return;
      }
      const [ success, message ] = login(user);
      if (!success) {
         alert(message);
         return;
      }
      alert(message);
      setAuth(true);
      setUser({
         email: "",
         password: "",
      });
      navigate(location.state?.from || "/", { replace: true });
   };
   return (
      <>
         <div className="max-w-layout mx-auto mt-16">
            <section className="px-4 md:px-8 py-8">
               <div className="w-full md:hidden flex justify-center items-center gap-3 mb-4 flex-col text-center">
                  <img src={Logo} alt="" className="w-24" />
                  <div className="font-semibold text-3xl text-text">Login</div>
               </div>
               <div className="text-primary md:text-text md:text-5xl text-2xl font-semibold mb-4">
                  Welcome Back!
               </div>
               <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_500px] gap-4">
                  <div className="w-full md:max-w-2xl flex flex-col justify-center items-center md:p-4 p-1">
                     <form
                        className="flex flex-col gap-4 w-full"
                        action={handleSubmit}>
                        <Input
                           type="email"
                           value={user.email}
                           onBlur={handleInputBlur}
                           onChange={handleChange}
                           onFocus={handleFocus}
                           error={error[ 'email' ]}
                           name="email"
                           placeholder="Enter Your Email"
                        />
                        <Input
                           type="password"
                           value={user.password}
                           onBlur={handleInputBlur}
                           onChange={handleChange}
                           onFocus={handleFocus}
                           error={error[ 'password' ]}
                           name="password"
                           placeholder="Enter Your Password"
                        />
                        <Button name="Submit" className="text-text" />
                     </form>
                     <div className="w-full flex justify-between items-center mt-4 text-text text-sm">
                        <NavLink
                           to={SIGN_UP}
                           className="cursor-pointer hover:text-primary active:text-primary">
                           Don't Have Account?
                        </NavLink>
                        <NavLink
                           to={FORGET_PASSWORD}
                           className="cursor-pointer hover:text-primary active:text-primary">
                           Forget Your Password?
                        </NavLink>
                     </div>
                     <div className="w-full h-px bg-primary relative mt-4">
                        <div className="absolute -top-[.8rem] left-1/2 -translate-x-1/2 bg-background px-2 text-text flex items-center justify-center whitespace-nowrap">
                           or
                        </div>
                     </div>
                     <Button
                        name="Login with Google"
                        className="text-text w-full mt-8"
                     />
                  </div>
                  <div className="md:pr-8 hidden md:block md:py-4">
                     <img
                        src={ContactImage}
                        alt=""
                        className="rounded-2xl md:w-full h-auto"
                     />
                  </div>
               </div>
            </section>
         </div>
      </>
   );
};
export default Login;
