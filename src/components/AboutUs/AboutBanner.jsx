import React from "react";
import { Box, Button, Container, Flex, Heading, Img, Spacer, Text } from "@chakra-ui/react";
import aboutImg from "../../Images/about-cook.jpg";
import { useEffect } from "react";

function AboutBanner(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container maxW={1080} mx={"auto"} mt={20}>
      <Flex>
        <Box w={"48%"}>
          <Heading fontSize={"4xl"} fontWeight={800}>20 Years Of Experience In Cooking Service</Heading>
          <Text fontSize={"md"} my={4} color={"gray.500"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            convallis diam massa. Integer eleifend molestie quam, ac gravida
            mauris sagittis eu. Integer massa ligula, porttitor ac pharetra nec,
            convallis a velit. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nullam aliquet sapien ut
            leo placerat feugiat.
          </Text>
          <Button size={"lg"} borderRadius={15} bgColor={"#000"} color={"#fff"}>Discover More</Button>
        </Box>
        <Spacer />
        <Box w={"48%"}>
          <Img src={aboutImg} borderRadius={20}/>
        </Box>
      </Flex>
    </Container>
  );
}

export default AboutBanner;
