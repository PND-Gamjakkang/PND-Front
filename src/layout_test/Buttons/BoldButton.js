import React from "react";
import Button from "./Button";

const BoldButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <b>B</b>
    </Button>
  );
};
