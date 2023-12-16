'use client'

import Link from "next/link";

import styles from './AppNav.module.css'

const AppNav = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link href="/cities">Cities</Link>
        </li>
        <li>
          <Link href="/countries">Countries</Link>
        </li>
      </ul>
    </div>
  );
};

export default AppNav;