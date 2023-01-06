import { Flex, Image, Box, Text, Stack, Input, Button } from "@chakra-ui/react";
import React from "react";
import Subs1 from "../../Images/subs1.png";
import Subs2 from "../../Images/subs2.png";

function Inbox(props) {
  return (
    <Box maxW={1080} mx={"auto"}>
    <Flex mt={20} ml={10} mr={10}>
      <Flex bgColor={"#EBF8FF"} borderRadius={30}>
        <Box>
          <Image src={Subs1} />
        </Box>
        <Box mt={50}>
          <Text fontWeight={800} pt={38} fontSize="4xl" color="#001219">
            Deliciousness to your inbox
          </Text>
          <Text w="500px" fontSize="md" color="#001219">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </Text>
          <Stack spacing={3}>
            <Box mt={55} ml={10} mr={10}  borderRadius={5}>
          <Input p={5} my={1} w="300px" placeholder='Your Email Address' borderRadius={15} backgroundColor="white" size='lg' />
          <Button bgColor={"#000"} color={"#fff"} w={120} size='lg' borderRadius='10px'>Button</Button>
          </Box>
          </Stack>
        </Box>
        <Box>
          <Image mt={135} src={Subs2} />
        </Box>
      </Flex>
    </Flex>
    </Box>
  );
}

export default Inbox;
