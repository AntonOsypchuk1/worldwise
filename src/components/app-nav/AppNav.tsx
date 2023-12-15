import React from 'react';
import styles from './AppNav.module.css'
import Link from "next/link";

const AppNav = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Cities</Link>
        </li>
        <li>
          <Link href="/">Countries</Link>
        </li>
      </ul>
    </div>
  );
};

export default AppNav;