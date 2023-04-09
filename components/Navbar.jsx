import {
	Box,
	Show,
	VStack,
	HStack,
	Stack,
	Flex,
	Spacer,
	Icon,
	Text,
	Heading,
	Collapse,
	isOpen,
	useDisclosure,
	Button,
	Divider,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Box>
			<Box display={{ base: "none", sm: "block" }}>
				<Box>This text appears only on screens 600px and higher.</Box>
			</Box>
			<Box display={{ base: "block", sm: "none" }}>
				<Box>
					<Flex bg="gray.200" borderRadius="">
						<Box p="4">
							<Image
								src="/img/logo.jpeg"
								alt="logo"
								width={50}
								height={50}
							/>
						</Box>
						<Spacer />
						<Button mr="4" my="auto" onClick={onToggle}>
							{isOpen ? <CloseIcon /> : <HamburgerIcon />}
						</Button>
					</Flex>
				</Box>
				<Collapse in={isOpen}>
					<Box bg="gray.300">
						<Stack as="nav" alignItems="center" boxShadow="dark-lg">
							<Box
								as="button"
								w="100%"
								py="4"
								_hover={{ bg: "white" }}
								m="0">
								Home
							</Box>
							{/* <Divider/> */}
							<Box
								as="button"
								w="100%"
								py="4"
								_hover={{ bg: "white" }}>
								Features
							</Box>
							{/* <Divider/> */}
							<Box
								as="button"
								w="100%"
								py="4"
								_hover={{ bg: "white" }}>
								About
							</Box>
							{/* <Divider/> */}
							<Box
								as="button"
								w="100%"
								py="4"
								_hover={{ bg: "white" }}>
								Services
							</Box>
							{/* <Divider/> */}

							<Box
								as="button"
								w="100%"
								py="4"
								_hover={{ bg: "white" }}>
								Contact
							</Box>
						</Stack>
					</Box>
				</Collapse>
			</Box>
		</Box>
	);
}
