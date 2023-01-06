import React from "react";
import {
  Box,
  Flex,
  Img,
  Heading,
  Text,
  HStack,
  Avatar,
  Stack,
} from "@chakra-ui/react";
import food1 from "../../Images/food01.jpg";
import poster from "../../Images/poster3.png";
import moment from "moment";
import { Link } from "react-router-dom";


const ReceipePostList = ({ posts, popularReceipe, searchQuery }) => {
  const defaultImageUrl =
    "https://indiaeducationdiary.in/wp-content/uploads/2021/02/lovett-backdrop-crop-1-1024x576.jpg";
  const defaultAvatarImg = "https://bit.ly/ryan-florence";
  const imgPath = "https://foodielandnod.herokuapp.com/";

  return (
    <Box>
      <Flex mt={20}>
        <Box w={750}>
          {posts.filter((value) => {
            if(searchQuery === ""){
              return value;
            } else if(
              value.recipeId.title.toLowerCase().includes(searchQuery.toLowerCase())
            ){
              return value;
            }
          }).map((item) => {
            return (
              <Flex mb={5}>
                <Box w={250} key={item._id}>
                  <Link to={`/receipeposts/${item._id}`}>
                    <Img
                    
                      src={
                        imgPath + item.recipeId.image
                      }
                      w={220}
                      h={200}
                      borderRadius={20}
                    />
                  </Link>
                </Box>
                <Box w={400}>
                  <Heading fontSize={"md"}>{item.recipeId.title}</Heading>
                  <Text
                    fontSize={"sm"}
                    color={"gray.500"}
                    textAlign={"justify"}
                  >
                    {item.recipeId.description}
                  </Text>
                  <HStack mt={35}>
                    <Avatar
                      name="AV"
                      src={
                        imgPath + item.recipeId.userId.Image
                      }
                      size="sm"
                    />
                    <Heading fontSize={"sm"} fontWeight={800}>
                      {item.recipeId.userId.firstName + " " + item.recipeId.userId.lastName}
                    </Heading>
                    <Text fontSize={"sm"} color={"gray.500"}>
                      {moment(item.recipeId.userId.createdAt).format("MMM Do YY")}
                    </Text>
                  </HStack>
                </Box>
              </Flex>
            );
          })}
        </Box>
        <Box ml={10} w={330}>
          <Heading fontSize={"2xl"}>Tasty Receipes</Heading>
          <Flex>
            <Box>
              {popularReceipe.slice(1, 4).map((data) => {
                return (
                  <Link to={`/receipeposts/${data._id}`}>
                  <HStack mt={5}>
                    <Box w={120}>
                    <Img w={180} h={120} borderRadius={30} src={food1} />
                    </Box>
                    <Box w={210}>
                    <Stack>
                      <Heading fontSize={"lg"}>{data.recipeId.title}</Heading>
                      <Heading fontSize={"sm"} color={"gray.400"}>
                        {"By" +
                          " " +
                          data.recipeId.userId.firstName +
                          " " +
                          data.recipeId.userId.lastName}
                      </Heading>
                    </Stack>
                    </Box>
                  </HStack>
                  </Link>
                );
              })}
            </Box>
          </Flex>
          <Img src={poster} mt={5} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ReceipePostList;
