import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image height={50} width={200} src="/logo.png" alt="WorldWise logo" />
    </Link>
  );
};

export default Logo;
