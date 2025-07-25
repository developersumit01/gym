import React from "react";
import Header from "./components/header";
import Contact from "./components/contact";
import Footer from "./components/footer";
import useAuth from "./hooks/useAuth.hook";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [ auth ] = useAuth();
  console.log(auth, 'kadjhaksdjhaks')
  return (
    <>
      <Header />
      {children}
      {auth && <Contact />}
      <Footer />
    </>
  );
}

export default Layout;
