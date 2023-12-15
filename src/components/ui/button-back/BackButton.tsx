import React from 'react';
import Button from "@/components/ui/button/Button";
import {useRouter} from "next/navigation";

const BackButton = () => {
  const router = useRouter();

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