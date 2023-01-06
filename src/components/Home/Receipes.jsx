import React, { Component } from "react";
import { Box, Heading, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Card from "../common/Card";
import { getAllReceipe } from "../../utils/homeService";
import defaultImg from '../../Images/food03.jpg';
import poster from '../../Images/poster.png';
import { Link } from "react-router-dom";

class Receipes extends Component {
  state = {
    popularReceipes: [],
  };

  imgPath = "https://foodielandnod.herokuapp.com/";

  async componentDidMount() {
    const { data : popularReceipes } = await getAllReceipe()
    this.setState({ popularReceipes });
  }
  render() {
    return (
      <Box maxW={1080} mx={"auto"} mt={20}>
        <Stack>
          <Heading textAlign={"center"}>Simple & Tasty Receipe</Heading>
          <Text textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt <br/>ut labore et dolore magna aliqua.
          </Text>
        </Stack>
        <SimpleGrid columns={3} spacing={5} mt={20}>
          {this.state.popularReceipes.slice(0,9).map((item, key) => {
            if(key != 5){
                return (
                <Link to={`/receipeposts/${item._id}`}>
                <Card key={key} img={this.imgPath + item.recipeId.image ? this.imgPath + item.recipeId.image : defaultImg }
                heading={item.recipeId.title} 
                time={item.recipeId.cookTime}
                category={item.recipeId.categoryId.categoryName}/>
                </Link>)
            } else {
                return(
                <Img maxW={"100%"} src={poster} alt="Advertisement"></Img>
                )
            };
          })}
        </SimpleGrid>
      </Box>
    );
  }
}

export default Receipes;
