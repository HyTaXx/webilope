import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Webilope",
    description: "Webilope app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="icon" href="images/favicon.png" />
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
