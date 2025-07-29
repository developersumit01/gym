import type React from "react";

interface InputProps {
   type: string;
   placeholder?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   value: string;
}
const Input: React.FC<InputProps> = ({ type, placeholder, onChange, value }) => {
   return (
      <>
         <input type={type} className='p-3 rounded-lg outline-none font-semibold text-lg bg-transparent text-text tracking-wider border border-primary' placeholder={placeholder} onChange={onChange} value={value} />
      </>
   )
}

export default Input;