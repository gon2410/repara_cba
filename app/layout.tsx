import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ReparaCBA",
    description: "Reporta calles en mal estado para que sean arregladas.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<nav className="bg-red-400">
					<div className="flex gap-5 justify-around p-3">
						<Link href={"/"}><Image src={"/barrera.png"} alt="road_block_image" width={30} height={30}/></Link>
						<div className="flex gap-5">
							<Link href={"/reportar"} className="hover:underline">Reportar</Link>
							<Link href={"/seguirreporte"} className="hover:underline">Seguir reporte</Link>
						</div>
						<div>
							<></>
						</div>
					</div>
				</nav>
				<main className="text-black grid justify-center">
					{children}
				</main>
				{/* <footer className="bg-red-400 p-5">
					<p className="text-center">Desarrollado por Gonzalo Olivera</p>
				</footer> */}
			</body>
		</html>
  	);
}
