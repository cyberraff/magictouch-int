"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Header from "../components/Header";
import Features from "@/components/Features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<Header />
			<Features />
		</main>
	);
}
