import React from "react";
import { PrimaryButton } from "./style";

export const CustomButton = ({ text, event }) => {
  return <PrimaryButton onClick={event}>{text}</PrimaryButton>;
};
