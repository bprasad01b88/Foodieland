import { FormLabel, Select, FormHelperText } from "@chakra-ui/react";
import React from "react";

const SelectBox = ({ name, label, value, error, onChange, placeholder }) => {
  return (
    <>
      <FormLabel htmlFor={name} color={"gray.400"}>
        {label}
      </FormLabel>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        id="country"
        placeholder={placeholder}
        borderRadius={15}
        color="gray.500"
        w={250}
      >
        <option>Receipes</option>
        <option>Blogs</option>
      </Select>
      {error && (
        <FormHelperText color={"#E53E3E"}>
          {error}
        </FormHelperText>)}
    </>
  );
};

export default SelectBox;
