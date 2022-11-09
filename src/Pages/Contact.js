import React from 'react'
import { Grid, Container, Text, Textarea, Input, Checkbox, Button, Divider, GridItem } from '@chakra-ui/react'
//import { Textarea } from '@chakra-ui/react'
import Footer from '../Components/Footer' 

function Contact() {
  return (
  
    
      <Container >
        <form>
        <Text variant='h1' fontSize='40px' fontWeight='bold'>Contact Me</Text>
        <Text fontSize='18px' mt={4} mb={8}>Hi there, contact me to ask me about anything you have in mind.</Text>

        

          <Grid templateColumns='repeat(2, 250fr)' gap={8} display={{ base: "none", md: "none", lg: "flex", xl: "flex" }} >
            <GridItem>
            <Text mb='8px'  >First name</Text>
        <Input 
          id='first_name'
          mb={8}
          placeholder='Enter your First Name' />
            </GridItem>
            <GridItem>
            <Text mb='8px' >Last name</Text>
        <Input 
        id='last_name'
          mb={8}
          placeholder='Enter your Last Name' />
            </GridItem>
          </Grid>

          
          <Text mb='8px' display={{ base: "flex", md: "flex", lg: "none", xl: "none" }} >First name</Text>
          <Input
            id='first_name'
            display={{ base: "flex", md: "flex", lg: "none", xl: "none" }} 
            mb={8}
            placeholder='Enter your First Name' />
          <Text mb='8px' display={{ base: "flex", md: "flex", lg: "none", xl: "none" }} >Last name</Text>
          <Input
            id='last_name'
            display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
            mb={8} 
            placeholder='Enter your Last Name' />
        

        <Text mb='8px' >Email</Text>
        <Input 
          id='email'
          mb={8}
          placeholder='yourname@email.com' />
        
        <Text mb='8px' >Message</Text>
        <Textarea
        id='message'
        mb={6}
        placeholder="Send me a message and I'll reply you as soon as possible..." >

        </Textarea>
        <Checkbox mb={6}>You agree to providing your data to Evans who may contact you.</Checkbox>

        <Button id='btn__submit' 
            background='#1570EF' color='white' height='3rem'
                   fontWeight= '500'
                   width ='100%'>Send Message</Button>

<Divider mt={12} mb={6} />
    <Footer />
    </form>
      </Container>
      
    
    
  
  )
}

export default Contact