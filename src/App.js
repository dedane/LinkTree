import {  Image,
      Button,
      Container,
      Stack,
      HStack, 
      VStack,
      Box,
      Flex,
      Text,
      Link,
      Avatar, 
      AvatarGroup, 
      Spacer} from '@chakra-ui/react'
          
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
            m={30}
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
            <HStack>
              <AvatarGroup spacing='2rem'>
                <Avatar name='slack' src='https://ik.imagekit.io/ugyodiq15/icons8-slack-new-48_okvZXPkQE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666811678278'/>
                <Avatar name='Github' src='https://ik.imagekit.io/ugyodiq15/icons8-github-32_ynAHjKiDy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666811678127'/>
              </AvatarGroup>
            </HStack>
            <Box mt={20}>
            <Flex minWidth='max-content' alignItems='center' gap='20' >
        <Box>
          <Image alt='zuri-team' src='https://ik.imagekit.io/ugyodiq15/Vector_8yGPghXEQ.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666814065346' />
        </Box>
        
          <Spacer />
        <Box>
          <Text>HNG Internship 9 Frontend Task</Text>
        </Box>
          <Spacer />
        <Box>
          <Image alt='ingressive' src='https://ik.imagekit.io/ugyodiq15/ingressive_AI_l7vP0N.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666814065785'></Image>
        </Box>
      </Flex>
      </Box>
          </VStack>
          
        </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default App;
