'use client'

import LoginForm from "@/components/login-register/LoginForm";
import styles from './page.module.css'

const Page = () => {
    return (
        <div className={styles.login}>
            <LoginForm/>
        </div>
    );
};

export default Page;