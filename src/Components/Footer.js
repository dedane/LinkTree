import React from 'react'
import { Box, Spacer, Image, Text, Center, Flex } from '@chakra-ui/react'

function Footer() {
  return (
    
      <Flex minWidth='max-content' alignItems='center' gap='20'>
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
   
    
  )
}

export default Footer