import React from "react";
import Header from "./components/header";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
