import { Navigate, useLocation } from "react-router-dom";
import { type ReactNode } from "react";
import type React from "react";
import {useAuth} from "../hooks/useAuth.hook";
import { LOGIN, SIGN_UP } from "../absolute-routes";
import { isNewUser } from "../utils/detectUserStatus";
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
            <Navigate to={isNewUser()?SIGN_UP:LOGIN} state={{ from: location }} replace />
         )}
      </>
   );
};

export default AuthGuard;
