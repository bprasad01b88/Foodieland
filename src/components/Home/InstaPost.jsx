import React from "react";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Img,
  Stack,
  Text,
  Avatar,
  Flex,
  VStack,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { TbMessageShare } from "react-icons/tb";
import { BsBookmark } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import InstaImg1 from "../../Images/food-9.png";
import InstaImg2 from "../../Images/food-10.png";
import InstaImg3 from "../../Images/food-11.png";
import InstaImg4 from "../../Images/food-12.png";

function InstaPost(props) {
  function Feature({ img, title, location, desc, postDesc, date, ...rest }) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Flex>
          <Avatar
            w={10}
            h={10}
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <VStack>
            <Heading ml={4} fontSize="xl">
              {title}
            </Heading>
            <Text fontSize={"sm"} pt={-15}>
              {location}
            </Text>
          </VStack>
        </Flex>
        <Img src={img} />
        <Stack p={2}>
          <Flex>
            <Box>
              <Stack direction={"row"} spacing={2} align={"center"}>
                <Text fontWeight={700}>
                  <FiHeart />
                </Text>
                <Text fontWeight={700}>
                  <FaRegComment />
                </Text>
                <Text fontWeight={700}>
                  <TbMessageShare />
                </Text>
              </Stack>
            </Box>
            <Spacer />
            <Box>
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={700}>
                  <BsBookmark />
                </Text>
              </Stack>
            </Box>
          </Flex>
        </Stack>
        <Flex direction={"row"}>
          <HStack>
            <Text fontSize={"sm"}>
              {" "}
              <Avatar
                w={6}
                h={6}
                fontSize={1}
                src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                alt={"Author"}
              />
            </Text>
            <Text fontSize={"sm"} mt={4}>
              {desc}
            </Text>
          </HStack>
        </Flex>
        <Flex>
        <Text fontSize={"sm"} fontWeight={500} mt={2}>{postDesc}</Text>
        </Flex>
        <Text fontWeight={600}>{date}</Text>
      </Box>
    );
  }
  return (
    <Box maxW={1080} mx={"auto"}>
      <Stack mt={25}>
        <Heading fontSize={"4xl"} mt={20} textAlign={"center"}>
          Check Out @foodieland on Instagram
        </Heading>
        <Text fontSize={"md"} mt={15} textAlign={"center"}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Text>
      </Stack>
      <Box mt={10} mb={10}>
        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
          <GridItem w="100%">
            <Feature
              title="Foodieland"
              img={InstaImg1}
              location="Tokyo, Japan"
              desc="Liked by craig_love & 122,000"
              postDesc="Foodieland Never miss meet. Never be late for one too. A Keep
                track."
              date="September 10"
            />
          </GridItem>
          <GridItem w="100%">
            <Feature
              title="Foodieland"
              img={InstaImg2}
              location="Tokyo, Japan"
              desc="Liked by craig_love & 122,000"
              postDesc="Foodieland Never miss meet. Never be late for one too. A Keep
                track."
                date="September 10"
            />
          </GridItem>
          <GridItem w="100%">
            <Feature
              title="Foodieland"
              img={InstaImg3}
              location="Tokyo, Japan"
              desc="Liked by craig_love & 122,000"
              postDesc="Foodieland Never miss meet. Never be late for one too. A Keep
                track."
                date="September 10"
            />
          </GridItem>
          <GridItem w="100%">
            <Feature
              title="Foodieland"
              img={InstaImg4}
              location="Tokyo, Japan"
              desc="Liked by craig_love & 122,000"
              postDesc="Foodieland Never miss meet. Never be late for one too. A Keep
                track."
                date="September 10"
            />
          </GridItem>
        </Grid>
      </Box>
      <Box bgGradient="linear(to-b, white.0, blue.100)">
        <Center>
          <Button bgColor={"#000"} color={"#fff"} mb={15}>
            {<FaInstagram />}Visit Our Instagram
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default InstaPost;
