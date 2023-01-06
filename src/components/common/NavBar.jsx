import React from "react";
import {
  Box,
  Flex,
  Button,
  Stack,
  useColorMode,
  HStack,
  Divider,
  Heading,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const token = localStorage.getItem('login')
  console.log(token);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box maxW={1080} mx={"auto"}>
      <Box px={5} py={5}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading as="i" fontSize={"2xl"}>
              FoodieLand.
            </Heading>
          </Box>
          <Flex justifyContent={"space-between"}>
            <HStack spacing={8}>
              <NavLink to="/home">Home</NavLink>
              {token ? <><NavLink to="/receipelists">Receipe</NavLink>
              <NavLink to="/bloglists">Blog</NavLink>
              <NavLink to="/contacts">Contact</NavLink>
              </> : ""}
              <NavLink to="/about">About Us</NavLink>
              {!token ? <NavLink to="/login">Login</NavLink> : <NavLink to="/logout">LogOut</NavLink>}
              
            </HStack>
          </Flex>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={4}>
              <Button bgColor={"#fff"} onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button bgColor={"#fff"}>{<FaFacebook />}</Button>
              <Button bgColor={"#fff"}>{<FaTwitter />}</Button>
              <Button bgColor={"#fff"}>{<FaInstagram />}</Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Divider />
    </Box>
  );
}
