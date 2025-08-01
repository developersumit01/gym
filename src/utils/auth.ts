export const login = (user: any): [boolean, string] => {
   const users = localStorage.getItem("user");
   if (users) {
      const userArray = JSON.parse(users);
      const existingUser = userArray.find((u: any) => u.email === user.email);
      if (existingUser) {
         if (existingUser.password === user.password) {
            existingUser.isLoggedIn = true;
            localStorage.setItem("user", JSON.stringify(userArray));
            return [true, "Login successful"];
         } else {
            return [false, "Incorrect password"];
         }
      } else {
         return [false, "User not found"];
      }
   }
   return [false, "No users found please sign up first"];
};
export const logout = (): void => {
   const user = localStorage.getItem("user");
   if (user) {
      const userData = JSON.parse(user);
      const updatedUser = userData.map((u: any) => {
         if (u.isLoggedIn) {
            u.isLoggedIn = false;
         }
         return u;
      });
      localStorage.setItem("user", JSON.stringify(updatedUser));
      
   }
};
export const signUp = (user: any): [boolean, string] => {
   const existingUser = localStorage.getItem("user");
   if (existingUser) {
      const users = JSON.parse(existingUser);
      const userExists = users.some((u: any) => u.email === user.email);
      if (userExists) {
         return [false, "User already exists"];
      }
      users.push(user);
      localStorage.setItem("user", JSON.stringify(users));
   } else {
      localStorage.setItem("user", JSON.stringify([user]));
   }
   return [true, "Sign up successful"];
};
