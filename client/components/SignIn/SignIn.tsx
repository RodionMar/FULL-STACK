// ========================== next ===========================
import Image from "next/image";

//========================== images ===========================
import GoodDeedsImage from "@/public/images/GOOD-DEEDS-LOGO.png";

//========================== react =========================== 
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from "react";

//========================== schemas =========================== 
import SigninFormSchema from "./utils/schemas/signInValidation";

//========================== interfaces =========================== 
interface ISignInFormData {
  email: string;
  password: string;
}
interface ISignInProps {
  handleRedirectToSignUp: () => void;
  handleSignIn: (data: ISignInFormData) => void;
  fetchErrors: string | null;
}


const SignIn: FC<ISignInProps> = ({
  handleRedirectToSignUp,
  handleSignIn,
  fetchErrors
}) => {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<ISignInFormData>({
    mode: 'onChange',
    resolver: yupResolver(SigninFormSchema)
  });

  const onSubmit: SubmitHandler<ISignInFormData> = (data: ISignInFormData) => {
    // handleGetData(data)
    // handleClick()
    // console.log(data);
    handleSignIn(data);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-y-2.5">

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-xl rounded px-8 pt-8 pb-10 mb-4 w-full max-w-sm relative">
        <Image className="w-28 mx-auto" src={GoodDeedsImage} alt="Good Deeds Image" />
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        
        <div className="mb-8 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
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
        <div className="mb-10 relative">
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
        <div className="flex items-center mb-2">
          <button
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${isValid ? "opacity-100 hover:cursor-pointer hover:bg-blue-700" : "opacity-60 hover:cursor-default"}`}
            type="submit"
            data-testid="signin-button"
            disabled={!isValid}
          >
            Sign In
          </button>
        </div>
        <div className="text-sm text-center">
          Don't have an account?{' '}
          <span className="text-blue-500 hover:underline cursor-pointer" onClick={handleRedirectToSignUp}>Sign Up</span>
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

  )
};

export default SignIn;