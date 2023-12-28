import React from "react";
import Button from "@/components/ui/button/Button";

const BackButton = () => {
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        window.history.go(-1);
      }}
    >
      &larr; Back
    </Button>
  );
};

export default BackButton;
