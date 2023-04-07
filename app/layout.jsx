'use client';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head></head>
			<body>
				<CacheProvider>
					<ChakraProvider>
						<Navbar />
						{children}
					</ChakraProvider>
				</CacheProvider>
			</body>
		</html>
	);
}
