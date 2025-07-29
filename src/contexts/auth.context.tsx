import React, { createContext, useState } from "react";
interface AuthProps {
   children: React.ReactNode;
}
export const AuthContext = createContext('' as any);
const AuthContextProvider: React.FC<AuthProps> = ({ children }) => {
   const [ auth, setAuth ] = useState<boolean>(true);
   return (
      <AuthContext.Provider value={[ auth, setAuth ]}>
         {children}
      </AuthContext.Provider>
   )
}
export default AuthContextProvider;