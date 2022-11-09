import { 
    Divider,
    Container,
    Box,
    Icon,
    Flex,
    Text,
    
    Avatar, 
    AvatarGroup,
    } from '@chakra-ui/react'
    import {  TiArrowForwardOutline } from "react-icons/ti"; 
    import { TfiMoreAlt } from 'react-icons/tfi'; 
    import Footer from '../Components/Footer'     
    
import { Link } from "react-router-dom";


function Home() {
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
                  
                  id='twitter_button'
                  alignItems='center'
                  
                  style={{  marginTop: 20,
                    height:'4rem',
                   fontWeight:'500',
                   width:'100%',
                    display:'flex',
                    alignItems: 'center',
                  textDecoration:'none',
                  verticalAlign: 'middle',
                  textAlign: 'Center',
                  justifyContent: 'center',
                  background: '#EDF2F7'}}>Twitter Link </Link>
            <a
                href='https://training.zuri.team'
                
          id="btn__zuri"
          
          style={{  marginTop: 20,
            height:'4rem',
           fontWeight:'500',
           width:'100%',
            display:'flex',
            alignItems: 'center',
          textDecoration:'none',
          verticalAlign: 'middle',
          textAlign: 'Center',
          justifyContent: 'center',
          background: '#EDF2F7'}}>Zuri Team</a>
          
          <a
                href='https://books.zuri.team'
                
          id="books"
          alignItems='center'
          
          style={{  marginTop: 20,
            height:'4rem',
           fontWeight:'500',
           width:'100%',
            display:'flex',
            alignItems: 'center',
          textDecoration:'none',
          verticalAlign: 'middle',
          textAlign: 'Center',
          justifyContent: 'center',
          background: '#EDF2F7'}}>Zuri Books </a>
         
            
          <a href='https://books.zuri.team/python-for-beginners?ref_id=DisruptorOfPixels'
                
                id="book__python"
                
                style={{  marginTop: 20,
                    height:'4rem',
                   fontWeight:'500',
                   width:'100%',
                    display:'flex',
                    alignItems: 'center',
                  textDecoration:'none',
                  verticalAlign: 'middle',
                  textAlign: 'Center',
                  justifyContent: 'center',
                  background: '#EDF2F7'}}>
          Python Books </a>
         
          
            
                  <a
                   href='https://background.zuri.team'
                   
                   id="pitch"
                   alignItems='center'
                  
                style={{ 
                    marginTop: 20,
                    height:'4rem',
                   fontWeight:'500',
                   width:'100%',
                    display:'flex',
                    alignItems: 'center',
                  textDecoration:'none',
                  verticalAlign: 'middle',
                  textAlign: 'Center',
                  justifyContent: 'center',
                  background: '#EDF2F7'}}>Background Check for coders</a>
         
          {/*  <Button
                width={["full", "full", "full", "full"]}
                id='book__design'
                align="center"
                height='4rem'> */}
          <a href='https://books.zuri.team/design-rules'
          id="book__design"
          style={{  marginTop: 20,
            height:'4rem',
           fontWeight:'500',
           width:'100%',
            display:'flex',
            alignItems: 'center',
          textDecoration:'none',
          verticalAlign: 'middle',
          textAlign: 'Center',
          justifyContent: 'center',
          background: '#EDF2F7'}}
          background='#EDF2F7'
          >
            Design Books
        </a> {/*  </Button> */}
        
        <Link
          id='contact'  
          
         
          style={{  marginTop: 20,
            align: 'center',
            justify: 'center',
            height:'4rem',
            fontWeight:'500',
            alignItems: 'center',
            width:'100%',
            display:'flex',
            textDecoration:'none',
            verticalAlign: 'middle',
            textAlign: 'Center',
            justifyContent: 'center',
            background: '#EDF2F7'}}
            to='/Contact'>
              Contact Me
        </Link>
       
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
      
    
    <Footer />
    
   
  </Container>
);
}

export default Home;
