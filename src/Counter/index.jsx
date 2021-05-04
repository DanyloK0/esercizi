import React, { useState } from "react";
import { MainContainer } from "./style";
import { InputContainer } from "./style";
import { CustomButton } from "../components/CustomButton";
export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = (operation) => {
    if (operation === "Add") {
      setCounter(counter + 1);
    }
    if (operation === "Subtract") {
      setCounter(counter - 1);
    }
  };

  return (
    <MainContainer>
      <InputContainer>
        <CustomButton text="+" event={() => handleClick("Add")} />
        <CustomButton text="-" event={() => handleClick("Subtract")} />
      </InputContainer>
    </MainContainer>
  );
};
