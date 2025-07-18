import { createContext, useState } from "react";

export const AboutCardContext = createContext('' as any);
export const AboutCardContextProvider = ({ children }: { children: React.ReactNode }) => {
   const [ value, setValue ] = useState([ 'Boost your energy, strengthen your heart, and build lasting endurance with every workout.',
      'Reduce stress, improve sleep, and elevate your mood through consistent physical training.',
      'Enhance flexibility, increase muscle strength, and support long-term joint health with us.'
   ]);
   return (
      <AboutCardContext.Provider value={[ value, setValue ]}>
         {children}
      </AboutCardContext.Provider>
   );
}