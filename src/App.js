import { Heading, Image, Button, Container,  Stack, HStack, VStack,  } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
     
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
          <Heading>Evans Kimathi</Heading>
            <HStack>
              <Button
                width= '1152px'
                height= "76px"
                id='twitter'>Twitter Link</Button>
            </HStack>
            <HStack>
              <Button
                width= '1152px'
                height= "76px">Zuri Team</Button>
            </HStack>
            <HStack>
              <Button
                width= '1152px'
                height= "76px"
              >Zuri Books</Button>
            </HStack>
            <HStack>
              <Button
                width= '1152px'
                height= "76px"
                >Python Books</Button>
            </HStack>
            <HStack>
              <Button
                  width= '1152px'
                  height= "76px">Background Check for coders</Button>
            </HStack>
            <HStack>
              <Button
                  width= '1152px'
                  height= "76px">Design Books</Button>
            </HStack>
          </VStack>
        </Stack>
      
      </Container>
    </div>
  );
}

export default App;
