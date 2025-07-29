import React, { createContext, useState } from "react";
import * as gallaryImages from "../assets/images/gallery.images";
interface GallaryContextProps {
   children: React.ReactNode;
}
export const GallaryContext = createContext('' as any);
const GallaryContextProvider: React.FC<GallaryContextProps> = ({ children }) => {
   const [ value, setValue ] = useState([gallaryImages.Gallary1, gallaryImages.Gallary2, gallaryImages.Gallary3,gallaryImages.Gallary1, gallaryImages.Gallary2, gallaryImages.Gallary3,gallaryImages.Gallary1,gallaryImages.Gallary2]);
   // const [ value, setValue ] = useState([Gallary1, Gallary2, Gallary3,Gallary1]);
   return (
      <GallaryContext.Provider value={[ value, setValue ]}>
         {children}
      </GallaryContext.Provider>
   )
}

export default GallaryContextProvider;