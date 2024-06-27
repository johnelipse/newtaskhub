"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SunDimIcon, SunMoonIcon } from "lucide-react"

export function ToggleBtn() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          <SunDimIcon className="lg:h-[1.2rem] md:h-[1.1rem] h-[1rem] lg:w-[1.5rem] md:w-[1.2rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 outline-none hover:text-green-600" />
          <SunMoonIcon className="absolute lg:h-[1.2rem] md:h-[1.1rem] h-[1rem] lg:w-[1.5rem] md:w-[1.2rem] w-[1rem]  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 outline-none hover:text-[#007fffff]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
