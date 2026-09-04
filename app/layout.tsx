import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/_app/styles/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Zhulepa Nikolay - Fullstack Developer",
	description:
		"Fullstack Developer, specializing in React, Next.js, and Node.js. Passionate about building scalable web applications and exploring new technologies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
