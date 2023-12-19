'use client'

import {lazy} from "react";

const LoginForm = lazy(() => import("@/components/login-register/LoginForm"));

const Page = () => {
    return (
        <>
            <LoginForm/>
        </>
    );
};

export default Page;