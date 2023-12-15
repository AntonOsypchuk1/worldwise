import React from 'react';
import Link from "next/link";
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <Link href="/">
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
};

export default Logo;