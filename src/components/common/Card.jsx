import React from "react";
import { Box, Image, Heading, HStack, Button } from "@chakra-ui/react";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";

function Card({ img, heading, time, category }) {
  return (
    <Box p={3} bg="#EBF8FF" boxShadow='md' borderRadius={20} as="article" mt={15}>
      <Image objectFit="fill" h={300} w="100%" src={img} alt="stock image" />
      <Heading size="sm" fontWeight="bold" my={3}>
        {heading}
      </Heading>
      <HStack justifyItems={"space-between"}>
        <Button borderRadius="10px" bgColor="#F7FAFC">
          <BsFillAlarmFill />
          {time}
        </Button>
        <Button borderRadius="10px" bgColor="#F7FAFC">
          <ImSpoonKnife />
          {category}
        </Button>
      </HStack>
    </Box>
  );
}

export default Card;
