import React from 'react'
import { Grid, Container, Text, Textarea, Input, Radio, Button, Divider, GridItem } from '@chakra-ui/react'
//import { Textarea } from '@chakra-ui/react'
import Footer from '../Components/Footer' 

function Contacts() {
  return (
  
    
      <Container >
        <Text variant='h1' fontSize='40px' fontWeight='bold'>Contact Me</Text>
        <Text fontSize='15px'>Hi there, contact me to ask me about anything you have in mind.</Text>

        <Text mb='8px' >First name</Text>
        <Input 
          placeholder='Enter your First Name' />

        <Text mb='8px' >Last name</Text>
        <Input 
          placeholder='Enter your Last Name' />

          <Grid templateColumns='repeat(2, 250fr)' gap={8} display={{ base: "none", md: "none", lg: "flex", xl: "flex" }} >
            <GridItem>
            <Text mb='8px' >First name</Text>
        <Input 
          placeholder='Enter your First Name' />
            </GridItem>
            <GridItem>
            <Text mb='8px' >Last name</Text>
        <Input 
          placeholder='Enter your Last Name' />
            </GridItem>
          </Grid>

        <Text mb='8px' >Email</Text>
        <Input 
          placeholder='yourname@email.com' />
        
        <Text mb='8px' >Message</Text>
        <Textarea
        placeholder="Send me a message and I'll reply you as soon as possible..." >

        </Textarea>
        <Radio>You agree to providing your data to Evans who may contact you.</Radio>

        <Button background='#1570EF' color='white' height='4rem'
                   fontWeight= '500'
                   width ='100%'>Send Message</Button>

<Divider mt={12} mb={6} />
    <Footer />
        
      </Container>
      
    
    
  
  )
}

export default Contacts