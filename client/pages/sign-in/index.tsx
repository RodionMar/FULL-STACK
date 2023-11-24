//=============================== next ============================
import Head from "next/head";

//=============================== components ============================
import SignIn from "@/components/SignIn";

const SignInPage = () => {
  return (
    <div>
      <Head>
        <title>Good Deeds | Sign In</title>
      </Head>
      <SignIn />
    </div>
  )
};

export default SignInPage;