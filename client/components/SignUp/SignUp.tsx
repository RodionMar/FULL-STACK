// ========================== next ===========================
import Image from "next/image";

//========================== images ===========================
import GoodDeedsImage from "@/public/images/GOOD-DEEDS-LOGO.png";

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from "react";
import SignUpFormSchema from "./utils/schemas/signUpValidation";

interface ISignUpFormData {
  firstName: string;
  lastName: string;
  tag: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ISignUpProps {
  handleRedirectToSignIn: () => void;
  handleSignUp: (data: ISignUpFormData) => void;
  fetchErrors: string | null;
}

const SignUp: FC<ISignUpProps> = ({
  handleRedirectToSignIn,
  handleSignUp,
  fetchErrors
}) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<ISignUpFormData>({
    mode: 'onChange',
    resolver: yupResolver(SignUpFormSchema)
  });

  const onSubmit: SubmitHandler<ISignUpFormData> = (data: ISignUpFormData) => {
    handleSignUp(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-y-2.5">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-xl rounded px-8 pt-8 pb-10 mb-4 w-full max-w-sm relative">
        <Image className="w-28 mx-auto" src={GoodDeedsImage} alt="Good Deeds Image" />
        <h1 
          className="text-2xl font-bold text-center mb-6" 
          data-testid="title-stub"
        >
          Sign Up
        </h1>

        <div className="mb-8 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="Enter your first Name"
            {...register("firstName")}
            data-testid="first-name-stub"
          />
          <span className={`${errors.email ? 'text-red-500 absolute top-16 left-0' : 'hidden'}`}>
            {errors.email?.message}
          </span>
        </div>

        <div className="mb-8 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Enter your Last Name"
            {...register("lastName")}
            data-testid="last-name-stub"
          />
          <span className={`${errors.email ? 'text-red-500 absolute top-16 left-0' : 'hidden'}`}>
            {errors.email?.message}
          </span>
        </div>

        <div className="mb-8 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
            Tag
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tag"
            type="text"
            placeholder="Enter your tag. Ex. Labrador123"
            {...register("tag")}
            data-testid="tag-stub"
          />
          <span className={`${errors.email ? 'text-red-500 absolute top-16 left-0' : 'hidden'}`}>
            {errors.email?.message}
          </span>
        </div>

        <div className="mb-8 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your e-mail"
            {...register("email")}
            data-testid="email-stub"
          />
          <span className={`${errors.email ? 'text-red-500 absolute top-16 left-0' : 'hidden'}`}>
            {errors.email?.message}
          </span>
        </div>

        <div className="mb-8 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            data-testid="password-stub"
          />
          <span className={`${errors.password ? 'text-red-500 absolute top-16 left-0' : 'hidden'}`}>
            {errors.password?.message}
          </span>
        </div>

        <div className="mb-10 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPassword")}
            data-testid="confirm-password-stub"
          />
          <span className={`${errors.confirmPassword ? 'text-red-500 absolute top-16 left-0' : 'hidden'}`}>
            {errors.confirmPassword?.message}
          </span>
        </div>

        <div className="mb-2">
          <button
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${isValid ? "opacity-100 hover:cursor-pointer hover:bg-blue-700" : "opacity-60 hover:cursor-default"}`}
            type="submit"
            data-testid="signup-button"
            disabled={!isValid}
          >
            Sign Up
          </button>
        </div>

        <div className="text-sm text-center">
          Already have an account?{' '}
          <span className="text-blue-500 hover:underline cursor-pointer" onClick={handleRedirectToSignIn}>Sign In</span>
        </div>

        {fetchErrors !== undefined && (
          <span
            className="text-red-500 absolute bottom-3 right-2/4 translate-x-2/4"
            data-testid="error-stub"
          >
            {fetchErrors}
          </span>
        )}
      </form>
    </div>
  );
};

export default SignUp;