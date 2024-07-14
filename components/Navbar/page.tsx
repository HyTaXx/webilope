import React from "react";
import Link from "next/link";

const page = () => {
    return (
        <header className="flex h-20 w-full shrink-0 items-center fixed px-4 md:px-6">
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
                    <Link href="#antelopes" className="text-lg hover:underline">
                        Antelopes ?
                    </Link>
                    <Link href="#infos" className="text-lg hover:underline">
                        More infos
                    </Link>
                    <Link href="#stats" className="text-lg hover:underline">
                        Stats
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default page;
