import React, { createContext, useEffect, useState } from "react";
interface AuthProps {
   children: React.ReactNode;
}
export const AuthContext = createContext('' as any);
const AuthContextProvider: React.FC<AuthProps> = ({ children }) => {
   const [ auth, setAuth ] = useState<boolean | null>(null); // null = not checked yet

   useEffect(() => {
      const user = localStorage.getItem('user');
      if (user) {
         const userArray = JSON.parse(user);
         setAuth(userArray.some((u: any) => {
            return u.isLoggedIn; // return true if any user is logged in
         }))
      }
   }, []);

   if (auth === null) {
      return <div className="mt-18">Loading...</div>; // or a spinner
   }
   return (
      <AuthContext.Provider value={[ auth, setAuth ]}>
         {children}
      </AuthContext.Provider>
   )
}
export default AuthContextProvider;