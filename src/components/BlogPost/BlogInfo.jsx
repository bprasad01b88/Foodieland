import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  VStack,
  Text,
} from "@chakra-ui/react";
import cookImg from "../../Images/Cooking.jpg";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram, FaTwitter } from "react-icons/fa";
const BlogInfo = (props) => {
  return (
    <Box maxW={1080} mx={"auto"}>
      <Flex maxW={900} mx={"auto"} mt={20}>
        <Box>
          <Box>
            <Heading fontSize={"1xl"}>
              How did you start out in the food industry?
            </Heading>
            <Text
              fontSize={"sm"}
              mt={15}
              mr={40}
              color={"gray.500"}
              textAlign={"justify"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
          <Box mt={20}>
            <Heading fontSize={"1xl"}>
              What do you like most about your job?
            </Heading>
            <Text
              fontSize={"sm"}
              mt={15}
              mr={40}
              color={"gray.500"}
              textAlign={"justify"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
          <Box mt={20}>
            <Heading fontSize={"1xl"}>
              Do You cook at home on your days off?
            </Heading>
            <Img mt={10} borderRadius={20} src={cookImg} />
            <Text
              fontSize={"sm"}
              mt={10}
              mr={40}
              color={"gray.500"}
              textAlign={"justify"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
          <Box mt={20}>
            <Heading fontSize={"1xl"}>
              What would your advice be to young people looking to get their
              foot in theri door?
            </Heading>
            <Text
              fontSize={"sm"}
              mt={15}
              mr={40}
              color={"gray.500"}
              textAlign={"justify"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
          <Box
            mt={20}
            p="4"
            rounded="md"
            bgGradient="linear(to-l, pink.50, gray.300)"
          >
            <Text as="i" fontSize={"3xl"} fontWeight={800}>
              "Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio"
            </Text>
          </Box>
          <Box mt={20}>
            <Heading fontSize={"1xl"}>
              What is the biggest misconception that people have about being a
              professional chef?
            </Heading>
            <Text
              fontSize={"sm"}
              mt={15}
              mr={40}
              color={"gray.500"}
              textAlign={"justify"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
        </Box>

        <Box w={250}>
          <Heading fontSize={"md"}>Share this On</Heading>

          <VStack mt={5}>
            <Button bgColor={"#fff"}>{<GrFacebookOption />}</Button>
            <Button mt={20} bgColor={"#fff"}>{<FaTwitter />}</Button>
            <Button mt={20} bgColor={"#fff"}>{<FaInstagram />}</Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default BlogInfo;
