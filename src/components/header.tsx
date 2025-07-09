import Logo from "../assets/images/logo.png";
const Header=()=>{
   return (
      <>
      <header className="flex justify-between items-center p-4 bg-background text-white">
         <div className="w-12">
            <img src={Logo} alt="" />
         </div>
         <nav className="flex space-x-4 text-lg font-semibold">
            <a href="" className="active">Home</a>
            <a href="">About</a>
            <a href="">Workout Programs</a>
            <a href="">Recipes</a>
            <a href="">Store</a>
            <a href="">Login</a>
            <a href="">Sign up</a>
         </nav>
      </header>
      </>
   )
}
export default Header