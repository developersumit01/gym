import type React from "react";
import Button from "./button";
interface HeadingProps {
   headingName: string;
   onClick?: () => void;
   buttonText?: string;
}
const Heading: React.FC<HeadingProps> = ({ headingName, onClick, buttonText }) => {
   return (
      <>
         <div className="flex justify-between item-center mx-4 md:mx-0 mb-4 items-center">
            <span className="text-2xl font-medium text-start text-primary">
               /// {headingName}
            </span>
            {buttonText && <Button name="View All Products" onClick={onClick} />
            }
         </div>
      </>
   );
};

export default Heading;
