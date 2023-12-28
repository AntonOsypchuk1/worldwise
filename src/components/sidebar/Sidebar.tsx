import { FC, PropsWithChildren } from "react";

import styles from "./Sidebar.module.css";

import AppNav from "../app-nav/AppNav";
import Logo from "../logo/Logo";

const Sidebar: FC<
  PropsWithChildren<{
    children: React.ReactNode;
    isAuth: boolean;
  }>
> = ({ children, isAuth }) => {
  // const { user, isLoading } = useUser();

  return (
    <div className={styles.sidebar}>
      <Logo />
      {isAuth && <AppNav />}
      {children}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
