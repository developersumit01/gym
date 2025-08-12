export const getUserName=()=>{
   const users=JSON.parse(localStorage.getItem('user')||'[]')
   let user:any={};
   if(Array.isArray(users)&&users.length>0){   
      user=users.find((user:any)=>{
         return user.isLoggedIn;
      })
   }
   return user.name;
}