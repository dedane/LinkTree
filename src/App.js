import {  Image,
      
     
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
    <Container maxW={"100vw"}>
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
          
          <Avatar
            mt='10'
            borderRadius='full'
            size='2xl'
            
            src='https://ik.imagekit.io/ugyodiq15/IMG_3555-removebg-preview_iLHQDzpug.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657997737735'
            id='profile__img'
            alt='profile-image' />
               
          
         
          
         
          </Box>
          
          
         
      
          </Flex>
          <flex justifyContent='center'>
          <Text
            href='https://twitter.com/dedanxkim'
            align='center'
            display='block'
            id='twitter'
            fontSize='lg'
            m={30}
            fontWeight='bold'
            >@dedanxkim</Text>
          </flex>
       

         
         

            <Text id='slack' style={{visibility: 'hidden'}}>
              Evans Kimathi </Text>
            
            
              <Link href='https://twitter.com/dedanxkim'
                    height='4rem'
                    fontWeight='500'
                    width='100%'
                    alignItems='center'
                    mt={5}
                    style={{ display:'flex',
                        textDecoration:'none',
                            verticalAlign: 'middle',
                            textAlign: 'Center',
                            justifyContent: 'center',
                            background: '#EDF2F7'}}>Twitter Link </Link>
           
           
            
              <Link 
                  href='https://training.zuri.team'
                  height='4rem'
            fontWeight='500'
            width='100%'
            id="btn__zuri"
            alignItems='center'
            mt={5}
            style={{ display:'flex',
                textDecoration:'none',
                    verticalAlign: 'middle',
                    textAlign: 'Center',
                    justifyContent: 'center',
                    background: '#EDF2F7'}}>Zuri Team</Link>
            
            <Link 
                  href='https://books.zuri.team'
                  height='4rem'
            fontWeight='500'
            width='100%'
            id="books"
            alignItems='center'
            mt={5}
            style={{ display:'flex',
                textDecoration:'none',
                    verticalAlign: 'middle',
                    textAlign: 'Center',
                    justifyContent: 'center',
                    background: '#EDF2F7'}}>Zuri Books </Link>
           
              
            <Link href='https://books.zuri.team/python-for-beginners?ref_id=DisruptorOfPixels'
                  height='4rem'
                  fontWeight='500'
                  width='100%'
                  id="book__python"
                  alignItems='center'
                  mt={5}
                  style={{ display:'flex',
                      textDecoration:'none',
                          verticalAlign: 'middle',
                          textAlign: 'Center',
                          justifyContent: 'center',
                          background: '#EDF2F7'}}>
            Python Books </Link>
           
            
              
                    <Link
                     href='https://background.zuri.team'
                     height='4rem'
                     fontWeight='500'
                     width='100%'
                     id="pitch"
                     alignItems='center'
                      mt={5}
                  style={{ display:'flex',
                    textDecoration:'none',
                    verticalAlign: 'middle',
                    textAlign: 'Center',
                    justifyContent: 'center',
                    background: '#EDF2F7'}}>Background Check for coders</Link>
           
            {/*  <Button
                  width={["full", "full", "full", "full"]}
                  id='book__design'
                  align="center"
                  height='4rem'> */}
            <Link href='https://books.zuri.team/design-rules'
            id="book__design"
            height='4rem'
            fontWeight='500'
            width='100%'
            alignItems='center'
            mt={5}
            style={{ display:'flex',
                textDecoration:'none',
                    verticalAlign: 'middle',
                    textAlign: 'Center',
                    justifyContent: 'center'}}
            background='#EDF2F7'
            >
              Design Books
          </Link> {/*  </Button> */}
            
           <Flex 
               direction='column'
               align='center' 
               mt={10}>
              <AvatarGroup mt={4} mb={5} spacing='2rem'>
                <Link href='https://github.com/dedane'>
                  <Avatar name='slack' src='https://ik.imagekit.io/ugyodiq15/icons8-slack-new-48_okvZXPkQE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666811678278'/>
                </Link>
                <Link href>
                  <Avatar name='Github' src='https://ik.imagekit.io/ugyodiq15/icons8-github-32_ynAHjKiDy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666811678127'/>
                </Link>
              </AvatarGroup>
            </Flex>
            
        
            
        <Divider mt={4} mb={2} />
        <Center mb={2} >
          <Flex minWidth='max-content' alignItems='center' gap='20' display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}>
        <Box>
          <Image alt='zuri-team' src='https://ik.imagekit.io/ugyodiq15/logo.36d2d48a_7eAQqYBGT.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666871899744' />
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
          <Image alt='zuri-team' src='https://ik.imagekit.io/ugyodiq15/logo.36d2d48a_7eAQqYBGT.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666871899744' />
        </Box>
        <Spacer />
          
        <Box>
          <Text>HNG Internship 9 Frontend Task</Text>
        </Box>
          <Spacer />
          
        <Box mb={4}>
          <Image alt='ingressive' src='https://ik.imagekit.io/ugyodiq15/ingressive_AI_l7vP0N.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666814065785'></Image>
        </Box>
      </Flex>
      
      
      
     
    </Container>
  );
}

export default App;
