import { Input } from "@chakra-ui/react";
import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      value={value}
      placeholder="Search article, news or receipe..."
      size="lg"
      htmlSize={30}
      width="auto"
      borderRadius={15}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
