import React, { Component } from "react";
import { getAllCategory } from "../../utils/homeService";
import {
  Box,
  Button,
  Heading,
  HStack,
  Grid,
  GridItem,
  Text,
  Img,
} from "@chakra-ui/react";

class AllCategory extends Component {
  state = {
    categories: [],
  };

  imagePath = "https://foodielandnod.herokuapp.com/";

  async componentDidMount() {
    const { data: categories } = await getAllCategory();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <Box maxW={1080} mx={"auto"} mt={100}>
        <HStack justifyContent={"space-between"} mb={20}>
          <Heading>Categories</Heading>
          <Button bgColor="#EBF8FF" borderRadius="10px">
            View All Category
          </Button>
        </HStack>
        <Box h={"100%"} w={"100%"}>
          <Grid templateColumns="repeat(6, 1fr)" gap={6}>
            {categories.slice(0, 6).map((item) => (
              <GridItem w="100%" key={item._id}>
                <Img src={this.imagePath + item.image} />
                <Text fontSize={"md"} fontWeight={400} textAlign={"center"}>
                  {item.categoryName}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default AllCategory;
