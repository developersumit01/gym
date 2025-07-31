import React, { createContext, useEffect, useState } from "react";
interface AuthProps {
   children: React.ReactNode;
}
export const AuthContext = createContext('' as any);
const AuthContextProvider: React.FC<AuthProps> = ({ children }) => {
   const [ auth, setAuth ] = useState<boolean>(false);
   useEffect(() => {
      if (localStorage.getItem('user') !== null) {
         setAuth(true);
      }
   }, [])
   return (
      <AuthContext.Provider value={[ auth, setAuth ]}>
         {children}
      </AuthContext.Provider>
   )
}
export default AuthContextProvider;