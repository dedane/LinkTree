import React from 'react'
import { Center,
         Box,
         Spacer,
         Flex,
         Image,
         Text } from '@chakra-ui/react'

function Footer() {
  return (
    <div>
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
      </div>
  )
}

export default Footer