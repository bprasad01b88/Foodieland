import { Box, Heading, SimpleGrid, Image, HStack, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { getAllReceipe } from "../../utils/homeService";
import { Link } from 'react-router-dom';

function ReceipesPost(props) {

    const [data, setData ] = useState([]);
    const imgPath = "https://foodielandnod.herokuapp.com/";
    
    useEffect( () => {
        getReceipeData();
    }, []);

    const getReceipeData = async () => {
        const { data } = await getAllReceipe();
        setData(data);
    }

    return (
        <Box maxW={1080} mx={"auto"} mb={20}>
        <Box mt={20}>
        <Heading fontSize={"3xl"} textAlign={"center"}>Check Out The Delicious Receipe</Heading>
        </Box>
        <SimpleGrid columns={3} spacing={5} mt={10}>
          {data.slice(0,3).map((item, index) => (
            <Link to={`/receipeposts/${item._id}`}>
            <Box key={index} p={3} borderRadius={20} as="article" mt={15} boxShadow='dark-lg' rounded='md' bg='white'>
              <Image
                objectFit="fill"
                h={300}
                w="100%"
                src={imgPath + item.recipeId.image}
                alt="stock image"
              />
              <Heading size="md" fontWeight="bold" my={2} >
                {item.recipeId.title}
              </Heading>
              <HStack justifyItems={"space-between"}>
                <Button borderRadius="5" fontSize={"md"}>
                  <BsFillAlarmFill />
                  {item.recipeId.cookTime}
                </Button>
                <Button borderRadius="10px">
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

export default ReceipesPost;