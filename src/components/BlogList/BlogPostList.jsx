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
const BlogPostList = ({ posts, popularBlogs }) => {
  const defaultImageUrl =
    "https://indiaeducationdiary.in/wp-content/uploads/2021/02/lovett-backdrop-crop-1-1024x576.jpg";
  const defaultAvatarImg = "https://bit.ly/ryan-florence";
  const imgPath = "https://foodielandnod.herokuapp.com/";

  return (
    <Box>
      <Flex mt={20}>
        <Box w={750}>
          {posts.map((item) => {
            return (
              <Flex mb={5} key={item._id}>
                <Box w={250}>
                  <Link to={`/blogposts/${item._id}`}>
                    <Img
                      src={
                        imgPath + item.image
                          ? imgPath + item.image
                          : defaultImageUrl
                      }
                      w={220}
                      h={200}
                      borderRadius={20}
                    />
                  </Link>
                </Box>
                <Box w={400}>
                  <Heading fontSize={"md"}>{item.title}</Heading>
                  <Text
                    fontSize={"sm"}
                    color={"gray.500"}
                    textAlign={"justify"}
                  >
                    {item.description}
                  </Text>
                  <HStack mt={35}>
                    <Avatar
                      name="AV"
                      src={
                        imgPath + item.userId.Image
                          ? defaultAvatarImg
                          : imgPath + item.userId.Image
                      }
                      size="sm"
                    />
                    <Heading fontSize={"sm"} fontWeight={800}>
                      {item.userId.firstName + " " + item.userId.lastName}
                    </Heading>
                    <Text fontSize={"sm"} color={"gray.500"}>
                      {moment(item.userId.createdAt).format("MMM Do YY")}
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
              {popularBlogs.slice(0, 3).map((data) => {
                return (
                  <Link to={`/blogposts/${data._id}`}>
                  <HStack mt={5}>
                    <Img w={180} h={120} borderRadius={30} src={food1} />
                    <Stack>
                      <Heading fontSize={"lg"}>{data.title}</Heading>
                      <Heading fontSize={"sm"} color={"gray.400"}>
                        {"By" +
                          " " +
                          data.userId.firstName +
                          " " +
                          data.userId.lastName}
                      </Heading>
                    </Stack>
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

export default BlogPostList;
