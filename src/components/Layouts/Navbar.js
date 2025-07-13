import { IconButton } from '@chakra-ui/button';
import {
    Stack,
    Flex,
    Heading,
    Spacer,
    HStack,
    Text,
    Button,
} from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Stack
            p={5}
            bg={'gray.50'}
            as='header'
        >
            <Flex
                w='full'
                alignItems={'center'}
            >
                <Heading as='h3' ml={{ base: 0, sm: 8 }} size='lg' fontWeight={'thin'} color='purple.500' style={{ fontFamily: "Pacifico" }}>Resumegen</Heading>
                <Spacer></Spacer>
            </Flex>

        </Stack>
    )
}

export default Navbar
