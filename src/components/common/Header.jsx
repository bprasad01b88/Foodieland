import { Flex, Heading, IconButton, Spacer, VStack } from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa'
import React from 'react';

function Header(props) {
    return (
        <div>
            <VStack>
                <Flex w="100%">
                    <Heading ml="8" size="md" fontWeight="semibold" color="cyan.100">
                        Foodieland
                    </Heading>
                    <Spacer></Spacer>
                    <IconButton icon={<FaInstagram />}></IconButton>
                </Flex>
            </VStack>
        </div>
    );
}

export default Header;