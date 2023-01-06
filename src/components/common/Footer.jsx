import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Stack,
  Divider,
  Button,
  Img,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { getFooterData } from "../../utils/homeService";

function Footer(props) {

  const [data, setData] = useState([]);

  const imgPath = "https://foodielandnod.herokuapp.com/";

  useEffect( () => {
    window.scrollTo(0, 0);
    handleFooterData();
  }, []);

  const handleFooterData = async () => {
    const { data } = await getFooterData();
    setData( data );
  }

  
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
    });
  }

  return (
    <Box maxW={1080} mx={"auto"}>
      <Box mt={10}>
      {data.slice(0,1).map( item => {
        return(
          <>
          <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
          {/* <Img src={imgPath + item.logo}/>  */}
            <Text fontSize='2xl' as='i' color='#001219' fontWeight="800">Foodieland</Text>
            <Text>{item.subTitle}</Text>
          </Box>
          <Spacer />
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Link to="/receipelists" onClick={() => { scrollToTop()}}>Receipe</Link>
              <Link to="/bloglists" onClick={() => { scrollToTop()}}>Blog</Link>
              <Link to="/contacts" onClick={() => { scrollToTop()}}>Contact</Link>
              <Link to="/about" onClick={() => { scrollToTop()}}>About Us</Link>
            </Stack>
          </Flex>
        </Flex>
        <Divider />
        <Box mt={5} mb={10}>
          <Flex>
            <Flex>
              <Text fontWeight="600" justifyContent="center">{item.copyRightText}</Text>
            </Flex>
            <Spacer />
            <Flex alignItems={"end"}>
              <Stack direction={"row"} spacing={7}>
                <Button><a target="blank" href={item.facebookUrl}>{<FaFacebook />}</a></Button>
                <Button><a target="blank" href={item.twitterUrl}>{<FaTwitter />}</a></Button>
                <Button><a target="blank" href={item.facebookUrl}>{<FaInstagram />}</a></Button>
              </Stack>
            </Flex>
          </Flex>
        </Box>
          </>
        )
      })}
   
      </Box>
    </Box>
  );
}

export default Footer;
