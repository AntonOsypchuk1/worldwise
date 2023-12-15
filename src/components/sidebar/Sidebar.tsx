import React from 'react';
import {inspect} from "util";
import styles from "./Sidebar.module.css"
import AppNav from '../app-nav/AppNav';
import Logo from '../logo/Logo';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo/>
      <AppNav/>
      {/*<Outlet/>*/}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;