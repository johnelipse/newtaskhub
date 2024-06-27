import Link from 'next/link'
import React from 'react'
import { ToggleBtn } from './toggleBtn'
import { Plus } from 'lucide-react'
import Image from 'next/image'

export default function MobileHeader() {
  return (
    <div>
       <header className=" flex lg:hidden md:hidden justify-between items-center py-4 lg:px-[3rem] md:px-[2rem] px-[1rem] fixed w-[100%] top-0  bg-white/30 backdrop-blur-sm dark:bg-transparent/30">
        <div>
          <Link href="/">
            <Image
              width={231}
              height={209}
              src="/logo.png"
              alt="Logo loading"
              className="lg:w-[3rem] md:w-[2rem] w-[2rem] object-cover "
            />
          </Link>
        </div>
        <div className="flex items-center lg:gap-6 md:gap-4 gap-2">
          <ToggleBtn />
          <Link
            href="/add-assignment"
            className="bg-[#16a34e] dark:bg-[#1991c9] text-white py-1 px-1 rounded-full"
          >
            <Plus />
          </Link>
        </div>
      </header>
    </div>
  )
}
