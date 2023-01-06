import React, { useState, useEffect } from "react";
import Pagination from "../common/Pagination";
import {
  Center,
  Container,
  Heading,
  Box,
  Text,
  Input,
} from "@chakra-ui/react";
import ReceipePostList from "./ReceipePostList";
import { getAllReceipes, getPopularReceipes } from "../../utils/receipePost";

function ReceipeHeader() {
  const [data, setReceipe] = useState([]);
  const [popularReceipe, setPopularReceipe] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [postsPerPage] = useState(4);

  useEffect(() => {
    window.scrollTo(0, 0);
    receipeDetails();
    popularReceipeDetails();
  }, []);

  const receipeDetails = async () => {
    const { data } = await getAllReceipes();
    setReceipe(data);
  };


  const popularReceipeDetails = async () => {
    const { data: popularReceipe } = await getPopularReceipes();
    setPopularReceipe(popularReceipe);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container maxW={1080} mx={"auto"}>
      <Box>
        <Center>
          <Box mt={10}>
            <Heading fontSize={"5xl"}>Receipes & Article</Heading>
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
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            
          </Box>
        </Center>
      </Box>
      <ReceipePostList posts={currentPosts} searchQuery={searchQuery}  popularReceipe={popularReceipe} />
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

export default ReceipeHeader;
