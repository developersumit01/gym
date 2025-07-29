import React from "react";
import Header from "./components/header";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useLocation } from "react-router-dom";
import { AUTH } from "./routes";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  return (
    <>
      <Header />
      {children}
      {!location.pathname.includes(AUTH) && <Contact />}
      <Footer />
    </>
  );
}

export default Layout;
