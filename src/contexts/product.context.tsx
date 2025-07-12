import React, { createContext, useState } from "react";
import tShirtImage from "../assets/images/t-shirt.png";
import BagImage from "../assets/images/bag.png";
import WaterBottleImage from "../assets/images/water-bottle.png";
interface Products {
   children: React.ReactNode;
}
export const ProductsContext = createContext('' as any);
export const ProductsProvider: React.FC<Products> = ({ children }) => {
   const [ value, setValue ] = useState([ {
      name: 'Gym T-Shirt',
      image: tShirtImage,
      id: '1',
   },
   {
      name: 'Gym Bag',
      image: BagImage,
      id: '2',
   },
   {
      name: 'Water Bottle',
      image: WaterBottleImage,
      id: '3',
   },
   {
      name: 'Gym T-Shirt',
      image: tShirtImage,
      id: '4',
   }, ]);
   return (
      <ProductsContext.Provider value={[ value, setValue ]}>
         {children}
      </ProductsContext.Provider>
   );
}