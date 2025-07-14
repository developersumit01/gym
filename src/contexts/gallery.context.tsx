import React, { createContext, useState } from "react";
import Gallary1 from "../assets/images/gallery/gallery1.png";
import Gallary2 from "../assets/images/gallery/gallery2.png";
import Gallary3 from "../assets/images/gallery/gallery3.png";
interface GallaryContextProps {
   children: React.ReactNode;
}
export const GallaryContext = createContext('' as any);
export const GallaryContextProvider: React.FC<GallaryContextProps> = ({ children }) => {
   const [ value, setValue ] = useState([Gallary1, Gallary2, Gallary3,Gallary1, Gallary2, Gallary3,Gallary1,Gallary2]);
   // const [ value, setValue ] = useState([Gallary1, Gallary2, Gallary3,Gallary1]);
   return (
      <GallaryContext.Provider value={[ value, setValue ]}>
         {children}
      </GallaryContext.Provider>
   )
}