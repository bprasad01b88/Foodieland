import React, { useState, useEffect } from "react";
import { getAllBlogs, getAllPopularBlogs } from "../../utils/blogService";
import BlogPostList from "./BlogPostList";
import Pagination from "../common/Pagination";
import { getSearchQuery } from "../../utils/blogService";
import {
  Center,
  Container,
  Heading,
  Box,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";

function BlogHeader() {
  const [data, setBlogs] = useState([]);
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery] = useState("");
  const [postsPerPage] = useState(5);

  useEffect(() => {
    window.scrollTo(0, 0);
    blogsDetails();
    popularBlogsDetails();
  }, []);
  
  const blogsDetails = async () => {
    const { data } = await getAllBlogs();
    setBlogs(data);
  };

  const popularBlogsDetails = async () => {
    const { data: popularBlogs } = await getAllPopularBlogs();
    setPopularBlogs(popularBlogs);
  };

  const handleSearch = async (query) => {
    const { data: searchQuery } = await getSearchQuery(query);
    setBlogs(searchQuery, {currentPage : 1} );
  };


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  return (
    <Container maxW={1080} mx={"auto"}>
      <Box>
        <Center>
          <Box mt={10}>
            <Heading fontSize={"5xl"}>Blog & Article</Heading>
          </Box>
        </Center>
        <Center>
          <Text mt={5} color={"gray.600"} fontSize={"sm"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </Center>
        <Center>
          <Box mt={12}>
            <Input
              type="text"
              name="query"
              placeholder="Search article, news or receipe..."
              size="lg"
              htmlSize={30}
              width="auto"
              borderRadius={15}
              onChange={(event) => handleSearch(event.target.value)}
            />
          </Box>
        </Center>
      </Box>

      <BlogPostList posts={currentPosts} popularBlogs={popularBlogs} />
      <Center>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Center>
    </Container>
  );
}

export default BlogHeader;
