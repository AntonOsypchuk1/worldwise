import React from 'react';
import Button from "@/components/ui/button/Button";
import {router} from "next/client";

const BackButton = () => {
  return (
    <Button
      type='back'
      onClick={() => router.back()}
    >
      &larr; Back
    </Button>
  );
};

export default BackButton;