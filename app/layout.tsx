import "./globals.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
	title: "Car Hub",
	description: "Discover the best car in the world.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="relative bg-[#10202f]">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
