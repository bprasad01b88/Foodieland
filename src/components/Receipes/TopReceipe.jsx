import { Box, Heading, SimpleGrid, Image, HStack, Button } from '@chakra-ui/react';
import React from 'react';
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { getAllReceipe } from "../../utils/homeService";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function TopReceipe(props) {

    const [data, setData ] = useState([]);
    const imgPath = "https://foodielandnod.herokuapp.com/";
    useEffect( () => {
      window.scrollTo(0, 0);
        getReceipeData();
    }, [])
    
    const getReceipeData = async () => {
        const { data } = await getAllReceipe();
        setData(data);
    }

    const scrollToTop = () => {
      window.scrollTo({
          top: 0,
      });
    }

    return (
        <Box maxW={1080} mx={"auto"} mb={20}>
        <Box mt={20}>
        <Heading fontSize={"3xl"} textAlign={"center"}>You May Like These Receipes Too</Heading>
        </Box>
        <SimpleGrid columns={4} spacing={5} mt={10}>
          {data.slice(0,4).map((item, index) => (
            <Link to={`/receipeposts/${item._id}`} onClick={() => { scrollToTop() }}>
            <Box key={index} borderRadius={20} as="article" mt={15} boxShadow='dark-lg' rounded='md' bg='white'>
              <Image
                objectFit="fill"
                h={250}
                borderRadius={10}
                w="100%"
                src={imgPath + item.recipeId.image}
                alt="stock image"
              />
              <Heading size="sm" px={2} my={3} fontWeight="bold">
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

export default TopReceipe;