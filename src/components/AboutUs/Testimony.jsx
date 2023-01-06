import { Container, Grid, GridItem, Heading, Stack, Text, Avatar } from '@chakra-ui/react';
import React from 'react';


function Testimony(props) {
    return (
      <Container maxW={1080} mx={"auto"} mt={20}>
      <Heading>Our Professional Chef</Heading>
        <Grid templateColumns='repeat(4, 1fr)' gap={10} mt={10} maxW={900} mx={"auto"}>
            <GridItem>
                <Stack>
                <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/sage-adebayo' />
                <Heading fontSize={"lg"}>Segun Adebayo</Heading>
                <Text fontSize={"md"} color={"gray.500"}>Senior Chef</Text>
                </Stack>
            </GridItem>
            <GridItem>
            <Stack>
            <Avatar size='xl' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            <Heading fontSize={"lg"}>Kent Dodds</Heading>
            <Text fontSize={"md"} color={"gray.500"}>Senior Chef</Text>
            </Stack>
        </GridItem>
        <GridItem>
        <Stack>
        <Avatar size='xl' name='Ryan Flowrence' src='https://bit.ly/ryan-florence' />
        <Heading fontSize={"lg"}>Ryan Flowrence</Heading>
        <Text fontSize={"md"} color={"gray.500"}>Senior Chef</Text>
        </Stack>
    </GridItem>
    <GridItem>
    <Stack>
    <Avatar size='xl' name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
    <Heading fontSize={"lg"}>Prosper Otemuyiwa</Heading>
    <Text fontSize={"md"} color={"gray.500"}>Senior Chef</Text>
    </Stack>
</GridItem>
            
        </Grid>
      </Container>
    );
}

export default Testimony;