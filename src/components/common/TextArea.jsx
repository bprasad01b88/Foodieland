import { FormLabel, Textarea, FormHelperText } from "@chakra-ui/react";
import React from "react";

const TextArea = ({ name, label, value, error, onChange, placeholder }) => {
  return (
    <>
      <FormLabel htmlFor={name} color={"gray.400"}>
        {label}
      </FormLabel>
      <Textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        h={200}
        borderRadius={15}
      />
       {error && (
        <FormHelperText color={"#E53E3E"}>
          {error}
        </FormHelperText>)}
    </>
  );
};

export default TextArea;
