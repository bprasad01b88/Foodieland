import React, {useState, useEffect} from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import {
  Image,
  Box,
  Heading,
  Flex,
  Text,
  Button,
  HStack,
  Wrap,
  WrapItem,
  Avatar,
  Img,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineSlowMotionVideo, MdKitchen } from "react-icons/md";
import { getPopularReceipes } from '../../utils/homeService';
import capsFirst from '../../utils/capsFirst';

const Banner = () => {

  const [data, setData] = useState([]);

  const imgPath = "https://foodielandnod.herokuapp.com/";

  const receipeDetails = async () => {
    const {data : data} = await getPopularReceipes();
    setData(data);
  }

  useEffect(() => {
    receipeDetails();
  }, [])

  return (
    <Carousel infiniteLoop>
      {data.map((item) => {
        return (
          <Box key={item._id}>
            <Flex
              maxW={1024}
              mx={"auto"}
              mb={10}
              mt={10}
              bg="#EBF8FF"
              borderRadius="15px"
            >
              <Box w={512}>
                <Button borderRadius="10px" mt={10} ml={-300}>
                  <MdKitchen /> Hot Receipe
                </Button>
                <Heading fontSize="4xl" mt={25} ml={5} mr={20}>
                  {capsFirst(item.recipeId.title)}
                </Heading>
                <Text fontSize={"sm"} ml={10} mt={3} mb={3} textAlign="justify" mr={20}>
                {item.recipeId.description}
                </Text>
                <HStack ml={10} justifyItems={"space-between"}>
                  <Button borderRadius="10px" bgColor="#EDFDFD">
                    <BsFillAlarmFill />
                    {item.recipeId.prepTime}
                  </Button>
                  <Button borderRadius="10px" bgColor="#EDFDFD">
                    <ImSpoonKnife />
                    {item.recipeId.categoryId.categoryName}
                  </Button>
                </HStack>
                <Wrap
                  spacing="160px"
                  mt={20}
                  ml={10}
                  mb={5}
                  justifyItems={"space-between"}
                >
                  <WrapItem>
                    <Avatar
                      size="sm"
                      name={"Kent Dodds"}
                      src={imgPath + item.recipeId.categoryId.image}
                    />
                    <Box pl={3}>
                      <Heading fontSize={"sm"}>{item.recipeId.categoryId.categoryName}</Heading>
                      <Text fontSize={"sm"}>{moment(item.recipeId.categoryId.createdAt).format("MMM Do YY")}</Text>
                    </Box>
                  </WrapItem>
                  <Link to={`/receipeposts/${item._id}`}>
                  <Button borderRadius="10px" bgColor="#000" colorScheme="#fff">
                    View Receipe
                    <MdOutlineSlowMotionVideo />
                  </Button></Link>
                </Wrap>
              </Box>
              <Link to={`/receipeposts/${item._id}`}>
              <Box w={512}>
                <Img src={imgPath + item.recipeId.image} height={460}  w={"100%"} />
              </Box>
                </Link>
            </Flex>
          </Box>
        );
      })}
    </Carousel>
  );
};

export default Banner;
