import type React from "react";

interface InputProps {
   type: string;
   placeholder?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   value: string;
   name?: string;
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
}) => {
   return (
      <>
         <input
            type={type}
            name={name}
            className="p-3 rounded-lg outline-none font-semibold text-lg bg-transparent text-text tracking-wider border border-primary"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
         />
      </>
   );
};

export default Input;
