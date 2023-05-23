'use client';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import Header from '../components/Header';
import Features from '/components/Features';
import About from '/components/About';
import Testimonials from '@/components/Testimonials';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main>
			<Header />
			<Features />
			{/* <About /> */}
			<Testimonials />
		</main>
	);
}
