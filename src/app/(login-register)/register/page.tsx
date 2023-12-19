'use client'

import {lazy} from "react";

const RegisterForm = lazy(() => import( "@/components/login-register/RegisterForm"));

const Page = () => {
  return (
    <>
      <RegisterForm/>
    </>
  );
};

export default Page;