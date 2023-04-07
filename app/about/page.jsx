'use client'
// export default function About() {
// 	return (
// 		<div>
// 			<div>this thing choke oo</div>
// 		</div>
// 	);
// }

import React from 'react';
import { 
  Flex,
  Box,
  IconButton,
  Button,
  Stack,
  Collapse,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function App() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('gray.100', 'gray.900')}
        color={useColorModeValue('gray.600', 'gray.200')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        align={'center'}
      >
        <Flex flex={{ base: 1, md: 'auto' }} justify={{ base: 'start', md: 'start' }}>
          <Button size={'md'} variant={'ghost'} onClick={onToggle} display={{ base: 'block', md: 'none' }}>
            {isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
          </Button>
          <Box ml={{ base: -2 }} display={{ base: 'none', md: 'block' }}>
            <Button size={'md'} variant={'ghost'}>
              Home
            </Button>
            <Button size={'md'} variant={'ghost'} ml={4}>
              About
            </Button>
            <Button size={'md'} variant={'ghost'} ml={4}>
              Contact
            </Button>
          </Box>
        </Flex>

        <Box flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box cursor="pointer" fontWeight="bold">
            My Website
          </Box>
        </Box>

      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Button size={'md'} variant={'ghost'}>
              Home
            </Button>
            <Button size={'md'} variant={'ghost'}>
              About
            </Button>
            <Button size={'md'} variant={'ghost'}>
              Contact
            </Button>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}

export default App;
