import * as yup from "yup";

const SigninFormSchema = yup.object({
  email: yup
    .string()
    .required('Wrong format')
    .matches(/^[A-Za-z0-9@.+_-]+$/, 'Wrong format'),
  password: yup
    .string()
    .required('Wrond format')
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Too Long!'),
});

export default SigninFormSchema;