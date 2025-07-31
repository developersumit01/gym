// This function validates the entire form based on the provided schema
// It takes the initial state of the form and the validation schema as arguments
// This function validate the entire form on the time of submission
// It returns an object containing error messages for each field that fails validation
const validateForm = (initialState: any, schema: any) => {
   const error: any = {};
   for (const key in initialState) {
      const validate = schema[key];
      for (const validateFun of validate) {
         // console.log(validateFun, "validateFun");
         const errorMessage = validateFun(initialState[key]);
         if (errorMessage) {
            error[key] = errorMessage; // Store the error message for the field
            break; // Stop further validation for this field if an error is found
         } else {
            error[key] = ""; // Clear the error message if validation passes
         }
      }
   }
   return error; // Return true if all validations pass
};
// This function validates a single input field when it loses focus
// It takes the input event and the validation schema as arguments
// It returns an object containing error messages for the field that fails validation
// This function is useful for real-time validation as the user interacts with the form
const validateInput = (
   input: React.FocusEvent<HTMLInputElement>,
   schema: any
) => {
   const { name, value } = input.target;
   let errorMessage = "";
   for (const validateFun of schema[name]) {
      console.log(validateFun, errorMessage, "validateFun");
      errorMessage = validateFun(value);
   }
   return errorMessage;
};
export { validateForm, validateInput };
