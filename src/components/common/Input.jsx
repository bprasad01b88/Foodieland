import { FormLabel, Input, FormHelperText } from "@chakra-ui/react";
import React from "react";

const InputData = ({ name, label, value, error, onChange, placeholder }) => {
  return (
    <>
      <FormLabel htmlFor={name} color={"gray.400"}>
        {label}
      </FormLabel>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        id="first-name"
        placeholder={placeholder}
        borderRadius={15}
        w={250}
        />
         {error && (
        <FormHelperText color={"#E53E3E"}>
          {error}
        </FormHelperText>
      ) }
    </>
  );
};

export default InputData;
