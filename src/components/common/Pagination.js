import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumber = [];

  const pageSize = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= pageSize; i++) {
   pageNumber.push(i);
  }

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
    });
};
  return (
    <Box>
      <Grid>
          <HStack mt={5}>
            {pageNumber.map((number) => (
              <GridItem>
                <Button
                size={"lg"}
                  onClick={() => { paginate(number); scrollToTop() }}
                  bgColor={number == currentPage ? "#000" : "gray.200"}
                  borderRadius={15}
                  color={number == currentPage ? "#fff" : "#000"}
                >
                  {number}
                </Button>
              </GridItem>
            ))}
          </HStack>
      </Grid>
    </Box>
  );
};

export default Pagination;
