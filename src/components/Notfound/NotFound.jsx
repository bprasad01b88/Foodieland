import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import Footer from "../common/Footer";

function NotFound(props) {
  return (
    <>
      <Box maxW={1080} mx={"auto"}>
        <Box w={500} h={400} bgColor={"#FEB2B2"} mx={"auto"} borderRadius={40}>
        <Heading textAlign={"center"} py={40} px={15} mt={10}>OOP'S! 404 Page Not Found...</Heading>
        </Box>
      </Box>
    </>
  );
}

export default NotFound;
