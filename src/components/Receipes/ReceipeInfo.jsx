import React from "react";
import moment from "moment";
import capsFirst from "../../utils/capsFirst";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  Avatar,
  Stack,
  Icon,
  Button,
  Img,
  Spacer,
  Grid,
  Divider,
  GridItem,
} from "@chakra-ui/react";
import { RiTimerFill } from "react-icons/ri";
import { TbToolsKitchen } from "react-icons/tb";
import { FiPrinter } from "react-icons/fi";
import { FiShare } from "react-icons/fi";
import { useState } from "react";
import { getOneReceipePost } from "../../utils/receipePost";
import { useEffect } from "react";

function ReceipeInfo(props) {
  const [receipePost, setReceipePost] = useState([]);

  const imgPath = "https://foodielandnod.herokuapp.com/";

  const receipeId = props.receipeId;
  console.log(receipeId);

  useEffect(() => {
    window.scrollTo(0, 0);
    getReceipeDetail();
  }, [receipeId]);

  const getReceipeDetail = async () => {
    const { data: receipePost } = await getOneReceipePost(receipeId);
    setReceipePost(receipePost.data);
  };
  
  console.log(receipePost);

  return (
    <Box maxW={1080} mx={"auto"}>
      <Flex mt={20}>
        <Box w={700}>
          <Heading fontSize={"5xl"} fontWeight={800}>
            {receipePost && receipePost.recipeId && receipePost.recipeId.title}
          </Heading>
          <Flex mt={5}>
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              <GridItem>
                <HStack>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Stack>
                    <Heading fontSize={"md"}>
                      {receipePost &&
                        receipePost.recipeId &&
                        capsFirst(
                          receipePost.recipeId.userId.firstName +
                            " " +
                            receipePost.recipeId.userId.lastName
                        )}{" "}
                    </Heading>
                    <Text fontSize={"sm"}>
                      {receipePost &&
                        receipePost.recipeId &&
                        moment(receipePost.recipeId.userId.createdAt).format(
                          "MMM Do YYYY"
                        )}
                    </Text>
                  </Stack>
                </HStack>
              </GridItem>
              <GridItem>
                <HStack>
                  <Icon w={8} h={8}>
                    <RiTimerFill />
                  </Icon>
                  <Stack>
                    <Heading fontSize={"md"}>Prep Time</Heading>
                    <Text fontSize={"sm"}>
                      {receipePost &&
                        receipePost.recipeId &&
                        receipePost.recipeId.prepTime}
                    </Text>
                  </Stack>
                </HStack>
              </GridItem>
              <GridItem>
                <HStack>
                  <Icon w={8} h={8}>
                    <RiTimerFill />
                  </Icon>
                  <Stack>
                    <Heading fontSize={"md"}>Cook Time</Heading>
                    <Text fontSize={"sm"}>
                      {receipePost &&
                        receipePost.recipeId &&
                        receipePost.recipeId.cookTime}
                    </Text>
                  </Stack>
                </HStack>
              </GridItem>

              <GridItem>
                <HStack>
                  <Icon w={8} h={8}>
                    <TbToolsKitchen />
                  </Icon>
                  <Stack>
                    <Text>
                      {receipePost &&
                        receipePost.recipeId &&
                        receipePost.recipeId.categoryId.categoryName}
                    </Text>
                  </Stack>
                </HStack>
              </GridItem>
            </Grid>
          </Flex>
          <Stack mt={8}>
            <Img
              w="100%"
              h={500}
              borderRadius={30}
              src={
                receipePost &&
                receipePost.recipeId &&
                imgPath + receipePost.recipeId.image
              }
            />
          </Stack>
        </Box>
        <Box ml={5} w={380}>
          <HStack pl={280}>
            <Button size="md" bgColor={"#BEE3F8"} borderRadius={35}>
              <FiPrinter />
            </Button>
            <Button size="md" bgColor={"#BEE3F8"} borderRadius={35}>
              <FiShare />
            </Button>
          </HStack>
          <Box mt={120} ml={5} bgColor={"#EBF8FF"} borderRadius={20}>
            <Heading fontSize={"2xl"} pl={5} pt={5}>
              Nutrition Information
            </Heading>
            <Grid mt={5}>
              <HStack mx={5}>
                <Text>Calories</Text>
                <Spacer />
                <Text>
                  {receipePost &&
                    receipePost.nutritionInformation &&
                    receipePost.nutritionInformation.calories}
                </Text>
              </HStack>
              <Divider />
              <HStack mx={5} mt={5}>
                <Text>Total Fat</Text>
                <Spacer />
                <Text>
                  {receipePost &&
                    receipePost.nutritionInformation &&
                    receipePost.nutritionInformation.totalFat}
                </Text>
              </HStack>
              <Divider />
              <HStack mx={5} mt={5}>
                <Text>Protein</Text>
                <Spacer />
                <Text>
                  {receipePost &&
                    receipePost.nutritionInformation &&
                    receipePost.nutritionInformation.protein}
                </Text>
              </HStack>
              <Divider />
              <HStack mx={5} mt={5}>
                <Text>carbohydrate</Text>
                <Spacer />
                <Text>
                  {receipePost &&
                    receipePost.nutritionInformation &&
                    receipePost.nutritionInformation.carbohydrate}
                </Text>
              </HStack>
              <Divider />
              <HStack mx={5} mt={5}>
                <Text>cholesterol</Text>
                <Spacer />
                <Text>
                  {receipePost &&
                    receipePost.nutritionInformation &&
                    receipePost.nutritionInformation.cholesterol}
                </Text>
              </HStack>
              <Divider />
            </Grid>
            <Text px={10} pb={10} mt={50} fontSize={"md"}>
              {receipePost &&
                receipePost.nutritionInformation &&
                receipePost.nutritionInformation.nutritionTitle}
            </Text>
          </Box>
        </Box>
      </Flex>
      <Stack mt={5}>
        <Text fontSize={"sm"} color={"gray.500"} textAlign={"justify"}>
          {receipePost &&
            receipePost.recipeId &&
            receipePost.recipeId.description}
        </Text>
      </Stack>
    </Box>
  );
}

export default ReceipeInfo;
