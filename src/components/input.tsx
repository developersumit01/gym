import type React from "react";

interface InputProps {
   type: string;
   placeholder?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   value: string;
   name?: string;
   error?:string
   onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
   onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
   type,
   placeholder,
   onChange,
   value,
   name,
   onBlur,
   onFocus,
   error
}) => {
   return (
      <>
         <div className="relative w-full mb-[10px]">
            <input
               type={type}
               name={name}
               className="px-3 py-2 rounded-lg outline-none font-semibold text-lg bg-transparent text-text tracking-wider border border-primary w-full"
               placeholder={placeholder}
               onChange={onChange}
               value={value}
               onFocus={onFocus}
               onBlur={onBlur}
            />
            <div className="absolute -bottom-[22px] left-1 text-primary text-sm ">{error}</div>
         </div>
      </>
   );
};

export default Input;
