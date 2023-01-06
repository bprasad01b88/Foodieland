import React from "react";
import { Text, Button, Box, Flex, Image } from "@chakra-ui/react";

function Chef(props) {
  return (
    <Box>
    <Flex maxW={1080} mx={"auto"} mt={20} pt={20}>
      <Flex w={600} mt={10} ml={50}>
      <Box mt={30} mr={20}>
      <Text fontSize='4xl' color='#001219' fontWeight="800">EveryOne Can be a Chef in their own Kitchen</Text>
      <Text fontSize="md">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
        </Text>
        <Button mt={25} bgColor={"#000"} color={"#fff"} size='lg' width='200px' borderRadius='10px'>Button</Button>
      </Box>
      <Box>
      </Box>
      </Flex>

      <Flex w={600}>
        <Box display="flex" w={500} bgGradient="linear(to-b, white.0, blue.100)">
          <Image
            boxSize="400px"
            objectFit="cover"
            src={
              "https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/cooker%2Fimage-220.png?alt=media&token=acdfc1a1-ed68-4828-a969-cf76a35273d6"
            }
          />
        </Box>
      </Flex>
    </Flex>
    </Box>
  );
}

export default Chef;
