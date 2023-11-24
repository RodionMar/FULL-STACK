// ========================== next ===========================
import Image from "next/image";
import Link from "next/link";

//========================== images ===========================
import GoodDeedsImage from "@/public/images/GOOD-DEEDS-LOGO.png";

//========================== react =========================== 
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//========================== schemas =========================== 
import LoginFormSchema from "./utils/schemas/loginValidation";

//========================== interfaces =========================== 
interface ILogInData {
  email: string;
  password: string;
}

const SignIn = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<ILogInData>({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema)
  });

  const onSubmit: SubmitHandler<ILogInData> = (data: ILogInData) => {
    // handleGetData(data)
    // handleClick()
    console.log(data)
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-y-2.5">
      
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
        <Image className="w-28 mx-auto" src={GoodDeedsImage} alt="Good Deeds Image"/>
        <h2 className="text-2xl font-bold text-center mb-6">Log in your account</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            E-mail
          </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your e-mail"
              {...register("email")}
            />
 
            <span className={`${errors.email ? 'text-red-500' : 'hidden'}`}>
              {errors.email?.message}
            </span>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          <span className={`${errors.password ? 'text-red-500' : 'hidden'}`}>
            {errors.password?.message}
          </span>
        </div>
        <div className="flex items-center mb-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Log In
          </button>
        </div>
        <div className="text-sm text-center">
            Don't have an account?{' '}
            <Link href="/signup">
              <span className="text-blue-500 hover:underline">Sign Up</span>
            </Link>
          </div>
      </form>
    </div>
    
  )
};

export default SignIn;