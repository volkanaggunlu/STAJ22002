/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "NEXDX - Next-Gen Solutions for Tomorrow",
	description: "NEXDX web sitesi - Next.js sürümü",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/assets/img/favicon.png" />
				<link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
				<link rel="stylesheet" href="/assets/css/all.css" />
				<link rel="stylesheet" href="/assets/webfonts/flat-icon/flaticon_bantec.css" />
				<link rel="stylesheet" href="/assets/css/animate.css" />
				<link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
				<link rel="stylesheet" href="/assets/css/slick.css" />
				<link rel="stylesheet" href="/assets/css/magnific-popup.css" />
				<link rel="stylesheet" href="/assets/css/meanmenu.min.css" />
				<link rel="stylesheet" href="/assets/sass/style.css" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
