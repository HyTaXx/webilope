import React from 'react'
import Link from "next/link"

const page = () => {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-4">
                <Link href="/" className='flex flex-row items-center'>
                    <img src="images/logo.svg" alt="Webilope Logo" className='w-[40px] h-[40px]' />
                    <p className="text-lg font-semibold text-primary">Webilope</p>
                </Link>
            </div>
        </div>
    </header>
    );
}

export default page