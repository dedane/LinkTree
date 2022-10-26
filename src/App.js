import { Heading, Image, Button, Container,  Stack, HStack, VStack, Box, Link } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
     <Box w='500px' h='100px'>
      <Stack>
         <VStack>
          <Image
            borderRadius='full'
            w='200'
            h='200'
            src='https://ik.imagekit.io/ugyodiq15/IMG_3555-removebg-preview_iLHQDzpug.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657997737735'
            id='profile_img'
            alt='profile-image'>

          </Image>
          <Link
            display='block'
            fontSize='lg'
            ma='20'
            fontWeight='bold'
            href=''>dedanxkim</Link>
            <HStack>
              <Button
                width='70rem'
                height='4rem'
                id='twitter'>Twitter Link</Button>
            </HStack>
            <HStack>
              <Button
                width='70rem'
                height='4rem'>Zuri Team</Button>
            </HStack>
            <HStack>
              <Button
                width='70rem'
                height='4rem'
              >Zuri Books</Button>
            </HStack>
            <HStack>
              <Button
                width='70rem'
                height='4rem'
                >Python Books</Button>
            </HStack>
            <HStack>
              <Button
                  width='70rem'
                  height='4rem'>Background Check for coders</Button>
            </HStack>
            <HStack>
              <Button
                  width='70rem'
                  height='4rem'>Design Books</Button>
            </HStack>
          </VStack>
        </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default App;
