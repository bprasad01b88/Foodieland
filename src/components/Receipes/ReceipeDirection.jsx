import React, { useState, useEffect } from "react";
import { getOneReceipePost } from "../../utils/receipePost";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Img,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiCircle } from "react-icons/fi";

function ReceipeDirection(props) {

  const [receipePost, setReceipePost] = useState([]);

  const imgPath = "https://foodielandnod.herokuapp.com/";

  const receipeId = props.receipeId;

  useEffect(() => {
    getReceipeDetail();
  }, [receipeId]);

  const getReceipeDetail = async () => {
    const { data: receipePost } = await getOneReceipePost(receipeId);
    setReceipePost(receipePost.data.direction);
  };

  return (
    <Box maxW={1080} mx={"auto"}>
      <Heading mt={10}>Direction</Heading>
      <Flex mt={5} w={700}>
        <Box>
          <VStack>
            <List spacing={5}>
              {receipePost.map(item => {
                return (
                  <ListItem fontSize={"md"} fontWeight={800}>
                  <ListIcon as={FiCircle} />
                  {item.directionTitle}
                  <Text fontWeight={300} fontSize={"sm"} color={"gray.500"} mt={5} textAlign={"justify"} >
                   {item.directionDescription}
                  </Text>
                  <Img src={imgPath + item.directionImage} w={600} my={5} borderRadius={20} /> 
                  <Text fontWeight={300} fontSize={"sm"} color={"gray.500"} mt={5} textAlign={"justify"}>
                  {item.directionDescription}
                  </Text>
                </ListItem>
             ) })}
              
              <Divider />
            </List>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default ReceipeDirection;
