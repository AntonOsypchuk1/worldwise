"use client";

import React, { FC } from "react";
import { ErrorComponent } from "next/dist/client/components/error-boundary";

const Error: FC<ErrorComponent> = () => {
  return (
    <div>
      <h2>Something went wrong!</h2>
    </div>
  );
};

export default Error;
