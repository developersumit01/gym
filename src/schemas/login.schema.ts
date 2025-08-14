import * as validation from "../utils/validation";
export const loginSchema = {
   email: [validation.isRequired('Email is required'), validation.isEmail()],
   password: [validation.isRequired('Password is required'), validation.isPassword()],
};