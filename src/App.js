import './App.css';
import { Box, Button, Flex, Heading, Stack } from '@chakra-ui/react'
import bgImage from './resources/images/s4.jpg'


function App() {
  return (
    <Box
    h='40vh'
    bg='gray'
    bgImage={`url(${bgImage})`}
    bgRepeat='no-repeat'
    bgSize='cover'
    >
    <Flex
    direction='column'
    alignItems='center'
    justify='center'
    h='100%'
    bg='rgb(0 0 0 / 50%)'
    p={['0 10%', null, '0 20%']}
    >
    <Heading
    color='white'
    textTransform='uppercase'
    textAlign='center'
    fontWeight='light'
    letterSpacing='5px'
    >domina el terreno</Heading>
    <Stack 
    direction={{ base: 'column', sm:'row'}} 
    spacing='40px' 
    mt='30px'
    w={['100%', null, 'auto']}>
      <Button
        variant='outline'
        size='lg'
        textTransform='uppercase'
        fontWeight='light'
        borderRadius='0'
        color='white'
        letterSpacing='1px'
        _hover={{
          color: 'black',
          bg: 'white'
        }}
        >ver detalles
      </Button>
      <Button
        variant='outline'
        size='lg'
        textTransform='uppercase'
        fontWeight='light'
        borderRadius='0'
        color='white'
        letterSpacing='1px'
        _hover={{
          color: 'black',
          bg: 'white'
        }}
         >ver video
      </Button>
    </Stack>
    </Flex>
    </Box>
      
    
  );
}

export default App;
