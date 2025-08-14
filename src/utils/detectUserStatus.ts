export const isNewUser = ():boolean => {
   const user = localStorage.getItem("user");
   if (!user) return true;
   return false;
};
