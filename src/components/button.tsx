interface ButtonProps {
   name: string,
   onClick?: () => void;
   className?: string;
}
const Button: React.FC<ButtonProps> = ({ name, onClick, className }) => {
   return (
      <>
         <button onClick={() => { onClick && onClick() }} className={`bg-transparent border border-primary px-6 py-2 rounded-2xl hover:bg-primary hover:text-authText font-semibold text-nowrap ${className}`}>{name}</button>
      </>
   )
}

export default Button;
