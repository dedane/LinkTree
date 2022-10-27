import {  Image,
      Button,
     
      Divider,
      Container,
      Box,
      Icon,
      Flex,
      Link,
      Center,
      Text,
      
      Avatar, 
      AvatarGroup, 
      Spacer} from '@chakra-ui/react'
      import {  TiArrowForwardOutline } from "react-icons/ti"; 
      import { TfiMoreAlt } from 'react-icons/tfi';      
import './App.css';

function App() {
  return (
    <Container className="App">
       <Box  display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}>
              <Icon style={{border: '1px dashed #D0D5DD',
                            borderRadius: '20px', position: 'absolute', right: '400px', top: '20px' }} as={TiArrowForwardOutline} width={8} height={8}/>
            </Box>
            <Box  display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}>
              <Icon style={{border: '1px dashed #D0D5DD',
                            borderRadius: '20px', position: 'absolute', right: '20px', top: '15px' }} as={TfiMoreAlt} width={8} height={8}/>
            </Box>
      <Flex justifyContent='space-evenly'>
      
           
          
      
          <Box display='flex' alignItems='baseline'>
          
          <Image
            borderRadius='full'
            w='200'
            h='200'
            src='https://ik.imagekit.io/ugyodiq15/IMG_3555-removebg-preview_iLHQDzpug.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657997737735'
            id='profile_img'
            alt='profile-image'>
               
          
          </Image>
         
          </Box>
          
         
      
          </Flex>
          
          <Link
            href='https://twitter.com/dedanxkim'
            display='block'
            fontSize='lg'
            m={30}
            fontWeight='bold'
            >dedanxkim</Link>

            <Text id='slack' style={{visibility: 'hidden'}}>
              Evans Kimathi </Text>
            
            <Link href='https://twitter.com/dedanxkim'>
              <Button
              mb='5'
              width={["full", "full", "full", "full"]}
              align="center"
                height='4rem'
                id='twitter'>Twitter Link</Button>
            </Link>
           
            <Link href='https://training.zuri.team'>
              <Button
                mb='5'
                width={["full", "full", "full", "full"]}
                id='btn_zuri'
                align="center"
                height='4rem'>Zuri Team</Button>
            </Link>
            <Link href='https://books.zuri.team'>
              <Button
                mb='5'
                width={["full", "full", "full", "full"]}
                align="center"
                id='books'
                height='4rem'
              >Zuri Books</Button>
            </Link>
            <Link href='https://books.zuri.team/python-for-beginners?ref_id=DisruptorOfPixels'>
              <Button
                mb='5'
                width={["full", "full", "full", "full"]}
                align="center"
                id='book_python'
                height='4rem'
                >Python Books</Button>
            </Link>
            <Link href='https://background.zuri.team'>
              <Button
                  mb='5'
                  id='pitch'
                  width={["full", "full", "full", "full"]}
                  align="center"
                  height='4rem'>Background Check for coders</Button>
            </Link>
            <Link href='https://books.zuri.team/design-rules'>
              <Button
                  width={["full", "full", "full", "full"]}
                  id='book_design'
                  align="center"
                  height='4rem'>Design Books</Button>
            </Link>
           <Flex 
               direction='column'
               align='center' 
               mt={10}>
              <AvatarGroup mt={4} mb={5} spacing='2rem'>
                <Avatar name='slack' src='https://ik.imagekit.io/ugyodiq15/icons8-slack-new-48_okvZXPkQE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666811678278'/>
                <Avatar name='Github' src='https://ik.imagekit.io/ugyodiq15/icons8-github-32_ynAHjKiDy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666811678127'/>
              </AvatarGroup>
            </Flex>
            
         
            
        <Divider mt={4} mb={2} />
        <Center mb={2} >
          <Flex minWidth='max-content' alignItems='center' gap='20' display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}>
        <Box>
          <Image alt='zuri-team' src='https://ik.imagekit.io/ugyodiq15/Vector_8yGPghXEQ.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666814065346' />
        </Box>
        <Spacer />
          <Spacer />
        <Box>
          <Text>HNG Internship 9 Frontend Task</Text>
        </Box>
          <Spacer />
          <Spacer />
        <Box>
          <Image alt='ingressive' src='https://ik.imagekit.io/ugyodiq15/ingressive_AI_l7vP0N.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666814065785'></Image>
        </Box>
      </Flex>
      </Center>

      <Flex direction='column' alignItems='flex-start' gap='2' display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}>
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
      
      
      
     
    </Container>
  );
}

export default App;
