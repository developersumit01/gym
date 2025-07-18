import ContactImage from '../assets/images/contact.png';
import Button from '../components/button';
const Contact = () => {
   return (
      <>
         <section className="bg-background">
            <div className="pt-4 px-4 md:px-0 max-w-layout m-auto">
               <div className="text-primary text-2xl md:text-3xl pl-4">/// Contact Us</div>
               {/* form container */}
               <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-4">
                  <div className="max-w-2xl flex justify-center items-center md:p-9 p-1">
                     <form className="flex flex-col gap-4 w-full">
                        <input type="text" className='p-3 rounded-lg outline-none font-semibold text-lg bg-transparent text-text tracking-wider border border-primary' placeholder='Enter Your Name' />
                        <input type="email" className='p-3 rounded-lg outline-none  text-lg bg-transparent text-text tracking-wider border border-primary' placeholder='Enter Your Email' />
                        <textarea className='px-3 py-2 rounded-lg outline-none  text-lg bg-transparent text-text tracking-wider border border-primary' placeholder='Enter Your Message' ></textarea>
                        <Button name='Submit' className='text-text' />
                     </form>
                  </div>
                  <div className="md:pr-8 hidden md:block">
                     <img src={ContactImage} alt="" className='rounded-2xl' />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
export default Contact;