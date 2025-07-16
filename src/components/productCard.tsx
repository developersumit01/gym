import React from "react";

interface ProductCardProps {
   id: string;
   name: string;
   image: string;
}
const ProductCard: React.FC<ProductCardProps> = ({ id,name, image }) => {
   return (
      <React.Fragment key={id}> 
         {/* Product Card */}
         <div className="flex justify-center h-80">
            <div className="relative h-full rounded-lg min-w-sm flex flex-col justify-center">
               <img src={image} alt="" className="relative z-20 w-80 h-60 object-contain mb-4" />
               <div className="text-lg font-semibold relative z-20 pb-2">
                  {name}
               </div>
               <div className="absolute left-0 bottom-0 bg-overlay z-0 h-1/2 w-full rounded-b-lg"></div>
            </div>
         </div>
      </React.Fragment>
   );
};
export default ProductCard;
