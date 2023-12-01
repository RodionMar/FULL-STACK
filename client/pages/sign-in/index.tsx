//=============================== next ============================
import Head from "next/head";

//=============================== react ============================
import { useRouter } from "next/router";

//=============================== components ============================
import SignIn from "@/components/SignIn";

//========================== interfaces =========================== 
interface ISignInFormData {
  email: string;
  password: string;
}

const SignInPage = () => {
  const router = useRouter();

  const handleRedirectToSignUp = () => {
    // dispatch(clearErrors());
    router.push(`/sign-up`);
  };

  const handleSignIn = async (data: ISignInFormData) => {
    
    console.log(data)
  }

  return (
    <div>
      <Head>
        <title>Good Deeds | Sign In</title>
      </Head>
      <SignIn 
        handleRedirectToSignUp={handleRedirectToSignUp}
        fetchErrors={null}
        handleSignIn={handleSignIn}
      />
    </div>
  )
};

export default SignInPage;