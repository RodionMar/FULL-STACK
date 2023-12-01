//=============================== next ============================
import Head from "next/head";

//=============================== react ============================
import { useRouter } from "next/router";

//=============================== components ============================
import SignUp from "@/components/SignUp";

//=============================== interfaces ============================
interface ISignUpFormData {
  firstName: string;
  lastName: string;
  tag: string;
  email: string;
  password: string;
  confirmPassword: string;
}


const SignUpPage = () => {
  const router = useRouter();

  const handleRedirectToSignIn = () => {
    // dispatch(clearErrors());
    router.push(`/sign-in`);
  };

  const handleSignUp = async (data: ISignUpFormData) => {
    
    console.log(data)
  }

  return (
    <div>
      <Head>
        <title>Good Deeds | Sign Up</title>
      </Head>
      <SignUp 
        handleRedirectToSignIn={handleRedirectToSignIn}
        handleSignUp={handleSignUp}
        fetchErrors={null}
      />
    </div>
  )
};

export default SignUpPage;