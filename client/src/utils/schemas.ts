import * as yup from "yup";

const emailValidation = yup
  .string()
  .required("Email address is required!")
  .matches(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    "This email address is not valid!"
  );

const passwordValidation = yup
  .string()
  .required("Password is required!")
  .min(8, "Password should contain at least 8 characters.")
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
    "Password must contain at least one letter, one number, and one special character (@$!%*#?&)."
  );

export const loginSchema = yup.object({
  email: emailValidation,
  password: passwordValidation,
});

export const registerSchema = yup.object({
  fullName: yup
    .string()
    .required("Name is required!")
    .matches(/^[a-zA-Z]+$/, "Name should contain only letters."),
  email: emailValidation,
  password: passwordValidation,
});
