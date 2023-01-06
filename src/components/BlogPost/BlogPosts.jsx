import React, { useState, useEffect } from "react";
import moment from "moment";
import BlogInfo from "./BlogInfo";
import ReceipesPost from "./ReceipesPost";
import { getOneBlogPost } from "../../utils/blogService";
import Footer from "../common/Footer";
import Subscription from "../common/Subscription";
import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Avatar,
  Stack,
  Text,
  Img,
} from "@chakra-ui/react";
import capsFirst from "../../utils/capsFirst";

function BlogPosts(props) {

  const [blog, setBlog] = useState([]);

  const imgPath = "https://foodielandnod.herokuapp.com/";

  const blogId = props.match.params.blogId;

  useEffect( () => {
    window.scrollTo(0, 0);
    getBlogDetail();
  }, []);

  const getBlogDetail = async () => {
    const { data : blog } = await getOneBlogPost(blogId);
    setBlog(blog.data);
  }
  
  return (
    <Container maxW={1080} mx={"auto"}>
      <Box mt={20}>
        <Heading textAlign={"center"} fontSize={"5xl"} fontWeight={800}>
          {blog.title}
        </Heading>
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={10}>
            <GridItem>
              <HStack>
                <Avatar
                  name="Ryan Florence"
                  src={blog && blog.userId && imgPath + blog.userId.Image}
                />
                <Stack>
                  <Heading fontSize={"sm"}>{blog && blog.userId && capsFirst(blog.userId.firstName + " " + blog.userId.lastName)}</Heading>
                </Stack>
              </HStack>
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"} mt={3}>
                {blog && blog.userId && moment(blog.userIdcreatedAt).format("MMM Do YYYY")}
              </Text>
            </GridItem>
          </Grid>
        </Center>
        <Text mt={10} fontSize={"sm"} color={"gray.500"} textAlign={"center"} mx={20}>
          {blog.description}
        </Text>
        <Box mt={10}>
        <Img src={imgPath + blog.image}  w={"100%"} borderRadius={30}/>
        </Box>
      </Box>
      <BlogInfo />
      <Subscription />
      <ReceipesPost />
      <Footer />
    </Container>
  );
}

export default BlogPosts;
