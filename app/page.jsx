'use client';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main>
			<Header />
		</main>
	);
}
