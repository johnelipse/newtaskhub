import { getAllAssignments } from "@/actions/assignments";
import { AccordionDemo } from "@/components/accordion";
import Assignments from "@/components/assignments";
import Header from "@/components/header";
import Link from "next/link";
import React from "react";

export default async function Page() {
 
  return (
    <div>
      <div>
        <Header />
        <div className="flex lg:px-[6rem] md:px-5 px-4 ">
          <nav className="w-[30%] h-full bg-[rgb(231, 235, 238);] px-5 py-3 fixed lg:block md:hidden hidden left-0 top-[10%]">
            <AccordionDemo />
            <div>
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
              </div>
            </div>
            <div className="bg-green-600 py-3 px-4 rounded-md text-center mt-4">
              <h3 className="mb-4 text-white text-[1.5rem] text-center">
                Try Out Our Templetes
              </h3>
              <Link
                href="/"
                className="bg-black text-white py-2 px-4 md:px-3 rounded-md "
              >
                Try Templetes
              </Link>
            </div>
          </nav>
          <div className="lg:w-[70%] md:w-full w-full lg:ml-[25rem] pb-7 mt-[5rem] md:ml-0 ml-0">
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
