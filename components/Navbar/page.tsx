"use client";
import React, { useState } from "react";
import Link from "next/link";

const Page = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex h-20 w-[100vw] shrink-0 bg-white lg:bg-transparent items-center fixed px-4 md:px-6">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="flex flex-row items-center">
                        <img
                            src="images/logo.svg"
                            alt="Webilope Logo"
                            className="w-[40px] h-[40px]"
                        />
                        <p className="text-2xl font-semibold text-primary">
                            Webilope
                        </p>
                    </Link>
                    <nav className="hidden md:flex space-x-4">
                        <Link
                            href="#antelopes"
                            className="text-lg hover:underline"
                        >
                            Antelopes ?
                        </Link>
                        <Link href="#infos" className="text-lg hover:underline">
                            More infos
                        </Link>
                        <Link href="#stats" className="text-lg hover:underline">
                            Stats
                        </Link>
                    </nav>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-lg">
                        ☰
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="flex flex-col items-start w-full absolute top-20 left-0 bg-white shadow-md md:hidden">
                    <Link
                        href="#antelopes"
                        className="w-full px-4 py-2 text-lg hover:bg-gray-200"
                    >
                        Antelopes ?
                    </Link>
                    <Link
                        href="#infos"
                        className="w-full px-4 py-2 text-lg hover:bg-gray-200"
                    >
                        More infos
                    </Link>
                    <Link
                        href="#stats"
                        className="w-full px-4 py-2 text-lg hover:bg-gray-200"
                    >
                        Stats
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Page;
