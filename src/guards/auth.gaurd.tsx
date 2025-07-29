import { Navigate, useLocation } from "react-router-dom";
import { type ReactNode } from "react";
import type React from "react";
import useAuth from "../hooks/useAuth.hook";
interface AuthGuardProps {
   children: ReactNode;
}
const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
   const [ auth ] = useAuth();
   const location = useLocation();
   return (
      <>
         {auth ? (
            children
         ) : (
            <Navigate to={"/auth/sign-up"} state={{ form: location }} replace />
         )}
      </>
   );
};

export default AuthGuard;
