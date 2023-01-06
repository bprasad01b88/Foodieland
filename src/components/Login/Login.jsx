import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

import React, { Component } from 'react'
import { setLogin } from "../../utils/authService";

 class Login extends Component {
    state = {
        userData: {
          email: "",
          password: "",
          token : "",
          login : false
        },
        
      };

      doSubmit = async (props) => {
        const response = await setLogin(this.state.userData);
        this.setState({ userData: {
            email: "",
            password: "",
          }})
          console.log(response)
          const userToken = response.data
          console.log(userToken);
          localStorage.setItem('login', JSON.stringify({
            // login : true,
            token : userToken.accessToken
          }))
          this.setState({login : true})
          this.props.history.push('/home');
          // window.location = '/home'
      }
      handleSubmit = (e) => {
        e.preventDefault();
      //  console.log("Form Data", this.state)
      //  console.log("hello from form")
    
        this.doSubmit();
      };

      handleChange = ({ currentTarget: input }) => {
        const userData = { ...this.state.userData };
        userData[input.name] = input.value;
        this.setState({ userData });
      };
  render() {
    const { userData } = this.state;
    return (
      <div><Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
    //   bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
        //   bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={this.handleSubmit}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" value={userData.email} onChange={this.handleChange}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={userData.password} onChange={this.handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
                    name="submit"
              >
                Sign in
              </Button>
            </Stack>
              </form>
          </Stack>
        </Box>
      </Stack>
    </Flex></div>
    )
  }
}

export default Login;
