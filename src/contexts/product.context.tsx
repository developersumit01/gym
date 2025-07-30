import React, { createContext, useState } from "react";
import * as productImage from "../assets/images/products.images";
interface Products {
   children: React.ReactNode;
}
export const ProductsContext = createContext('' as any);
export const ProductsProvider: React.FC<Products> = ({ children }) => {
   const [ value, setValue ] = useState([ {
      name: 'Gym T-Shirt',
      image: productImage.tShirtImage,
      id: '1',
   },
   {
      name: 'Gym Bag',
      image: productImage.BagImage,
      id: '2',
   },
   {
      name: 'Water Bottle',
      image: productImage.WaterBottleImage,
      id: '3',
   },
   {
      name: 'Gym T-Shirt',
      image: productImage.tShirtImage,
      id: '4',
   }, ]);
   return (
      <ProductsContext.Provider value={[ value, setValue ]}>
         {children}
      </ProductsContext.Provider>
   );
}