//=============================== next ==================================
import { useRouter } from 'next/router'
import Head from 'next/head';

//=============================== react ==================================
import { useEffect } from 'react';

const MainPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if(token) {
      router.push("/deeds");
    } else {
      router.push("/sign-in")
    }
  }, []);
};

export default MainPage;