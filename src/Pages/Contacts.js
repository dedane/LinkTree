import React from 'react'
import { Box, Container, Text, Textarea, Input, Radio, Button } from '@chakra-ui/react'
//import { Textarea } from '@chakra-ui/react'

function Contacts() {
  return (
    <Box>
      <Container>
        <Text variant='h1' fontSize='40px' fontWeight='bold'>Contact Me</Text>
        <Text fontSize='15px'>Hi there, contact me to ask me about anything you have in mind.</Text>

        <Text mb='8px' >First name</Text>
        <Input 
          placeholder='Enter your First Name' />

        <Text mb='8px' >Last name</Text>
        <Input 
          placeholder='Enter your Last Name' />

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
        
      </Container>
    </Box>
    
  )
}

export default Contacts