export const isRequired =
   (errorMessage: string = "This field is required") =>
   (value: string): string => {
      return value?.trim() ? "" : errorMessage;
   };
export const isEmail =
   (errorMessage: string = "Enter a valid email") =>
   (value: string): string => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(value) ? "" : errorMessage;
   };
export const isPhoneNumber =
   (errorMessage: string = "Enter a valid phone number") =>
   (value: string): string => {
      const phonePattern = /^\d{10}$/;
      return phonePattern.test(value) ? "" : errorMessage;
   };
export const isPINCode =
   (errorMessage: string = "Enter a valid PIN code") =>
   (value: string): string => {
      const pinPattern = /^\d{5}(-\d{4})?$|^\d{6}$/;
      return pinPattern.test(value) ? "" : errorMessage;
   };
export const isName =
   (errorMessage: string = "Enter a valid name") =>
   (value: string): string => {
      const namePattern = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
      return namePattern.test(value) ? "" : errorMessage;
   };
