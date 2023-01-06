import React, { Component } from "react";
import { Box, Heading, Flex, SimpleGrid, HStack, Text, Image, Button } from "@chakra-ui/react";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { getAllReceipe } from "../../utils/homeService";
import defaultImg from '../../Images/food02.jpg';
import { Link } from "react-router-dom";

class AllReceipes extends Component {
  state = {
    popularReceipes: [],
  };

  imgPath = "https://foodielandnod.herokuapp.com/";
  
  async componentDidMount() {
    const { data : popularReceipes } = await getAllReceipe();
    this.setState({ popularReceipes });
  }

  Feature({ img, title, location, desc, postDesc, ...rest }) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={2}>{location}</Text>
        <Image src={img} />
        <Text mt={4}>{desc}</Text>
        <Text mt={4}>{postDesc}</Text>
      </Box>
    );
  }
  render() {

    const { popularReceipes } = this.state;
    return (
      <Box maxW={1080} mx={"auto"} mt={20}>
        <Flex>
          <Heading w={540}>
            Try this delicious receipe
            <br /> to make your day
          </Heading>
          <Text w={540}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Flex>
        <SimpleGrid columns={4} spacing={5}>
          {popularReceipes.map((item) => (
             <Link to={`/receipeposts/${item._id}`}>
            <Box p={2} borderRadius={20} as="article" mt={15} boxShadow='dark-lg' rounded='md' bg='white'>
              <Image
              key={item._id}
                objectFit="fill"
                h={250}
                w="100%"
                src={this.imgPath + item.recipeId.image ? this.imgPath + item.recipeId.image : defaultImg}
                alt="stock image"
              />
              <Heading fontSize={"sm"} py={2} my={3} fontWeight="bold">
                {item.recipeId.title}
              </Heading>
              <HStack justifyItems={"space-between"}>
                <Button borderRadius="10px" bgColor="#EDFDFD">
                  <BsFillAlarmFill />
                  {item.recipeId.cookTime}
                </Button>
                <Button borderRadius="10px" bgColor="#EDFDFD">
                  <ImSpoonKnife />
                  {item.recipeId.categoryId.categoryName}
                </Button>
              </HStack>
            </Box></Link>
          ))}
        </SimpleGrid>
      </Box>
    );
  }
}

export default AllReceipes;

