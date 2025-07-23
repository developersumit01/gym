import Logo from '../assets/images/logo.png';
const Footer = () => {
   return (
      <>
         <footer className="bg-background px-4 text-text py-10">
            <div className="max-w-layout mx-auto">
               <div className="flex flex-col items-center justify-center py-2">
                  <img src={Logo} alt="" className='w-32' />
               </div>
               <p className="text-center"><span className="text-primary">Fitness Club</span> has been a leader in fitness for decades, helping members across the globe achieve their health and wellness goals. Whether you're just starting out or pushing your limits, our world-class facilities, expert trainers, and supportive community are here to power your journey. Join us and experience the legacy of strength.</p>
               <p className="text-center my-2">© 2025 | All Rights Reserved.</p>
               <p className="text-center">Design & Development by: <span className="text-primary">SUMIT KUMAR</span></p>
            </div>
         </footer>
      </>
   );
}
export default Footer;