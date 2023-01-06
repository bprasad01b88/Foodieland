import {
  Box,
  Flex,
  Heading,
  Stack,
  List,
  ListItem,
  ListIcon,
  Divider,
  HStack,
  Img,
  Spacer,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { getOneReceipePost } from "../../utils/receipePost";
import { FaCheckCircle } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import FoodImg3 from "../../Images/food03.jpg";
import { getPopularReceipes } from "../../utils/receipePost";
import { Link } from "react-router-dom";

function ReceipeIngrediants(props) {
  const [receipePost, setReceipePost] = useState([]);
  const [popularReceipe, setPopularReceipe] = useState([]);
  const receipeId = props.receipeId;

  const imgPath = "https://foodielandnod.herokuapp.com/";

  useEffect(() => {
    getReceipeDetail();
    popularReceipeDetails();
  }, [receipeId]);

  const getReceipeDetail = async () => {
    const { data: receipePost } = await getOneReceipePost(receipeId);
    setReceipePost(receipePost.data.ingredient);
  };

  const popularReceipeDetails = async () => {
    const { data: popularReceipe } = await getPopularReceipes();
    setPopularReceipe(popularReceipe);
  };

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
    });
  }

  return (
    <Box maxW={1080} mx={"auto"}>
      <Flex mt={10}>
        <Box>
          <Stack spacing={5}>
            <Heading fontSize={"4xl"}>Ingredients</Heading>
            <Heading fontSize={"lg"}>For Main Dish</Heading>
            <Stack>
              <List spacing={8}>
                {receipePost &&
                  receipePost[0] &&
                  receipePost[0].formaindish.map((formaindishItem, key) => {
                    return (
                      <>
                        {key === 0 ? (
                          <ListItem as={"s"} id={key} color="gray.400">
                            {key === 0 ? (
                              <ListIcon as={FaCheckCircle} color={"#000"} />
                            ) : (
                              <ListIcon as={FiCircle} color={"#000"} />
                            )}

                            {formaindishItem}
                          </ListItem>
                        ) : (
                          <ListItem id={key}>
                            {key === 0 ? (
                              <ListIcon as={FaCheckCircle} color={"#000"} />
                            ) : (
                              <ListIcon as={FiCircle} color={"#000"} />
                            )}

                            {formaindishItem}
                          </ListItem>
                        )}

                        <Divider />
                      </>
                    );
                  })}
              </List>
            </Stack>
            <Stack>
              <Heading mt={10} fontSize={"lg"}>
                For The Sauce
              </Heading>
            </Stack>
            <Stack>
              <List spacing={8}>
                {receipePost ? (
                  <>
                    <ListItem>
                      <ListIcon as={FiCircle} />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListIcon as={FiCircle} />
                      Assumenda, quia temporibus eveniet a libero incidunt
                      suscipit
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListIcon as={FiCircle} />
                      Quidem, ipsam illum quis sed voluptatum quae eum fugit
                      earum
                    </ListItem>
                  </>
                ) : (
                  receipePost &&
                  receipePost[0] &&
                  receipePost[0].sauce.map((sauceItem, key) => {
                    return (
                      <>
                        <ListItem id={key}>
                          <ListIcon as={FiCircle} />
                          {sauceItem}
                        </ListItem>
                        <Divider />
                      </>
                    );
                  })
                )}
              </List>
            </Stack>
          </Stack>
        </Box>
        <Spacer />
        <Box w={380}>
          <Heading fontSize={"4xl"}>Other Receipe</Heading>
          <Stack mt={5}>
            {popularReceipe.slice(1, 4).map((data) => {
              return (
                <Link to={`/receipeposts/${data._id}`} onClick={() => { scrollToTop() }}>
                <HStack>
                  <Box w={150}>
                  <Img w={120} h={100} borderRadius={30} src={imgPath + data.recipeId.image} />
                  </Box>
                  <Box w={200}>
                  <Stack>
                    <Heading fontSize={"lg"}>
                      {data.recipeId.title}
                    </Heading>
                    <Heading fontSize={"sm"} color={"gray.400"}>
                      By Andreas Paul
                    </Heading>
                  </Stack>
                  </Box>
                </HStack>
              </Link>
              );
            })}
            {/* <HStack>
              <Img w={180} h={110} borderRadius={30} src={FoodImg2} />
              <Stack>
                <Heading fontSize={"lg"}>
                  Chicken MeatBall With Creamy Cheese
                </Heading>
                <Heading fontSize={"sm"} color={"gray.400"}>
                  By Andreas Paul
                </Heading>
              </Stack>
            </HStack>
            <HStack>
              <Img w={180} h={110} borderRadius={30} src={FoodImg1} />
              <Stack>
                <Heading fontSize={"lg"}>
                  Chicken MeatBall With Creamy Cheese
                </Heading>
                <Heading fontSize={"sm"} color={"gray.400"}>
                  By Andreas Paul
                </Heading>
              </Stack>
            </HStack>
            <HStack>
              <Img mt={20} w={"100%"} h={300} src={FoodImg3} />
            </HStack> */}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default ReceipeIngrediants;
