import {
	Box,
	IconButton,
	useBreakpointValue,
	Stack,
	Heading,
	Text,
	Container,
	Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
	dots: true,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

export function CaptionCarousel() {
	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const top = useBreakpointValue({ base: "90%", md: "50%" });
	const side = useBreakpointValue({ base: "30%", md: "40px" });

	// This list contains all the data for carousels
	// This can be static or loaded from a server
	const cards = [
		{
			title: "WELCOME TO OUR MASSAGE THERAPY CENTER",
			text: "There are some things in life where it's better to receive than than to give, and massage is one of them.",
			image: "img/header-1.jpg",
		},
		{
			title: "PAIN DOESN'T HAVE TO BE A NORMAL WAY OF LIFE",
			text: "Massage is widely accepted as the perfect way to de-stress after working hard, or a busy lifestyle.",
			image: "img/header-2.jpg",
		},
		{
			title: "STRESS CAN AFFECT OUR BODIES AND OUR HEALTH!",
			text: "Our professional team will be happy to help you select the type of massage that's best for you.",
			image: "img/header-3.jpg",
		},
	];

	return (
		<Box
			// position={'relative'}
			// height={"600px"}
			height={{ base: "md", sm: "lg", md: "xl" }}
			width={"full"}
			overflow={"hidden"}>
			{/* CSS files for react-slick */}
			<link
				rel="stylesheet"
				type="text/css"
				charSet="UTF-8"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
			/>

			{/* Slider */}
			<Slider {...settings}>
				{cards.map((card, index) => (
					<Box
						key={index}
						height={{ base: "md", sm: "lg", md: "xl" }}
						position="relative"
						overflow={"hidden"}
						backgroundPosition="center"
						backgroundRepeat="no-repeat"
						backgroundSize={"cover"}
						backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${card.image})`}
						color={"gray.100"}>
						{/* This is the block you need to change, to customize the caption */}
						<Container
							size="container.lg"
							// height={{ base: "450px", sm: "600px", md: "750px" }}
							height={{ base: "md", sm: "lg", md: "xl" }}
							position="relative">
							<Stack
								spacing={6}
								w={"full"}
								maxW={"lg"}
								position="absolute"
								top="50%"
								transform="translate(0, -50%)"
								px={{ base: "16", md: "0.5" }}>
								<Heading
									fontSize={{
										base: "3xl",
										md: "4xl",
										lg: "5xl",
									}}>
									{card.title}
								</Heading>
								<Text
									fontSize={{ base: "md", lg: "lg" }}
									color="Gray.100">
									{card.text}
								</Text>
								<Button
									alignSelf={"center"}
									bg={"gray.300"}
									w={"32"}
									color={"black"}
									borderRadius={"full"}
									_hover={{ bg: "gray.200" }}>
									Book Now
								</Button>
							</Stack>
						</Container>
					</Box>
				))}
			</Slider>
		</Box>
	);
}

function Header() {
	return (
		<div>
			<CaptionCarousel />
		</div>
	);
}

export default Header;
