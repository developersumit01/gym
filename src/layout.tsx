import React from "react";
import Header from "./components/header";
import Contact from "./pages/contact";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
