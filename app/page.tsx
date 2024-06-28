import { getAllAssignments } from "@/actions/assignments";
import { AccordionDemo } from "@/components/accordion";
import Assignments from "@/components/assignments";
import Header from "@/components/header";
import { Globe, LinkedinIcon } from "lucide-react";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram, FaLinkedin, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default async function Page() {
 
  return (
    <div>
      <div>
        <Header />
        <div className="lg:flex md:block block lg:px-[6rem] md:px-4 sm:px-2 ">
          <nav className="w-[30%] h-full bg-[rgb(231, 235, 238);] px-5 py-3 fixed lg:block md:hidden hidden left-0 top-[10%]">
            <AccordionDemo />
            <div className="mt-8">
              <h3 className="mb-4 mt-4 font-bold ">Services at DesisHub</h3>
              <div>
                <p className="text-[14px] dark:font-thin">Web Development</p>
                <p className="text-[14px] mt-3 dark:font-thin">
                  Online web development Courses
                </p>
                <p className="text-[14px] mt-3 dark:font-thin">
                  Graphics designing
                </p>
                <p className="text-[14px] mt-3 dark:font-thin">
                  Website hosting
                </p>
                <p className="text-[14px] mt-3 dark:font-thin">
                 Seo and Digital Marketing
                </p>
                <p className="text-[14px] mt-3 dark:font-thin">
                 Internships
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Image width={342} height={147} className="w-[100%] h-16 object-cover rounded-md" src="/nex.jfif" alt="loading" />
            </div>
            <div  className="flex items-center gap-4 mt-12">
           <Link className="text-blue-700 hover:text-green-600 dark:text-green-500 dark:hover:text-blue-700" href="https://www.linkedin.com/company/desishub/posts/?feedView=all"> <FaLinkedinIn className="text-blue-700 hover:text-green-600 dark:text-green-500 dark:hover:text-blue-700"/></Link>
           <Link href="https://www.desishub.com/desishub-coding-school"> <Globe className="text-blue-700 w-4 hover:text-green-600  dark:text-green-500 dark:hover:text-blue-700" /></Link>
            <Link href=""><CgFacebook className="text-blue-700 hover:text-green-600 dark:text-green-500 dark:hover:text-blue-700"/></Link>
           <Link href="https://www.instagram.com/desishub_official/"> <FaInstagram className="text-blue-700 hover:text-green-600 dark:text-green-500 dark:hover:text-blue-700"/></Link>
            <Link href="https://www.tiktok.com/@desishubcoddingschool?lang=en"><FaTiktok className="text-blue-700 hover:text-green-600 dark:text-green-500 dark:hover:text-blue-700"/></Link>
            </div>
          </nav>
          <div className="lg:w-[70%] md:w-full w-full lg:ml-[25rem] pb-7 mt-[5rem] px-3 md:ml-0 ml-0">
            <h3 className="mb-4 text-[1.5rem] font-bold">
              All Assignments in Hand
            </h3>
            <p>
              Unlock your success in web development with our assignment
              website. Discover the ultimate assignment hub, and transform your
              journey with our assignment website.
            </p>
            <Assignments />
          </div>
        </div>
      </div>
    </div>
  );
}
