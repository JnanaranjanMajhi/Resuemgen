import {
    Text,
    Stack,
    HStack,
    Box,
    Container,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { FaTwitter  , FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>

            <Container
                as={Stack}
                maxW={'7xl'}
                py={5}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>

                <Stack direction={{ base: 'column', md: 'row' }} fontWeight={'medium'}>
                    <Text>&copy; 2025 Resumegen. Designed By</Text>
                    <Text as={'a'} href={'https://linkedin.com/in/jnanaranjan-majhi-b8519626a'} target={'_blank'} color={'blue.600'}>Jnanaranjan Majhi</Text>
                </Stack>


                <Stack direction={'row'} spacing={6}>
                    <IconButton isRound='true' as={'a'} href={'https://github.com/JnanaranjanMajhi'} target='_blank' bg={'gray.300'}>
                        <FaGithub />
                    </IconButton>
                    <IconButton isRound='true' as={'a'} href={'https://linkedin.com/in/jnanaranjan-majhi-b8519626a'} target='_blank' colorScheme={'blue'}>
                        <FaLinkedin />
                    </IconButton>
                    <IconButton isRound='true' as={'a'} href={'https://x.com/J_Majhi_'} target='_blank' colorScheme={'blue'}>
                        <FaTwitter />
                    </IconButton>

                </Stack>

            </Container>
        </Box>
    )
}

export default Footer
