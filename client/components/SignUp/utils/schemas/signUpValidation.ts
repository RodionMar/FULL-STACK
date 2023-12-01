import * as yup from "yup";

const SignUpFormSchema = yup.object({
  firstName: yup
    .string()
    .required('First name is required')
    .matches(/^[A-Za-z0-9@.+_-]+$/, 'Wrong email format'),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(/^[A-Za-z0-9@.+_-]+$/, 'Wrong email format'),
  tag: yup
    .string()
    .required('Tag is required'),
  email: yup
    .string()
    .required('Email is required')
    .matches(/^[A-Za-z0-9@.+_-]+$/, 'Wrong email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password is too long'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export default SignUpFormSchema;
