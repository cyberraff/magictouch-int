import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

function Features() {
	const cards = [
		{
			title: "Massage",
			text: "Massage involves working and acting on the body with pressure, vibration, moving, done manually or with mechanical aids.",
			image: "/img/massage.jpg",
		},
		{
			title: "Chiropractic",
			text: "It is a form of alternative medicine concerned with the diagnosis and treatment of disorders of the musculoskeletal system and spine.",
			image: "/img/chiropractic.jpg",
		},
		{
			title: "Aromatherapy",
			text: "Aromatherapy uses aromatic plant oils and essential oils for the purpose of altering one’s mood, psychological or physical well-being.",
			image: "/img/aromatherapy.jpg",
		},
	];
	return (
		<Box
			as={"div"}
			bg={"white"}
			// height={{ base: "md", sm: "lg", md: "xl" }}
			w={""}>
			<Heading as="h3" pt={"12"} align={"center"}>
				welcome
			</Heading>
			<Stack px={"10"} spacing={"10"}>
				{cards.map((card, index) => (
					<Box
						key={index}
						textAlign={"center"}
						pb={"8"}
						bg={"gray.300"}>
						<Box
							position="relative"
							w={{ base: "2xs" }}
							h={{ base: "3xs" }}
							mx={"auto"}
							my={"6"}>
							<Image src={card.image} alt={"image"} fill />
						</Box>
						<Heading as={"h4"} mb={"4"}>
							{card.title}
						</Heading>
						<Text fontSize={"lg"} px={"4"}>
							{card.text}
						</Text>
					</Box>
				))}
			</Stack>
			;
		</Box>
	);
}

export default Features;
