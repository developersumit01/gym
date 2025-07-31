import * as validation from "../utils/validation";

export const signUpFormSchema = {
   name: [validation.isRequired('Name is required'), validation.isName()],
   email: [validation.isRequired('Email is required'), validation.isEmail()],
   password: [validation.isRequired('Password is required'), validation.isPassword()],
   phone: [validation.isRequired('Phone number is required'), validation.isPhoneNumber()],
   city: [validation.isRequired('City is required'), validation.isName('Enter a valid city name')],
};
