import Image from "next/image";
import Link from "next/link";
import React from "react";
import gettingAllAssignments from "@/app/controllers/gettingAllAssignments";
import { getAllAssignments } from "@/actions/assignments";
import { AssignmentProps } from "@/types/type";
import { Assignment } from "@prisma/client";

export default async function Assignments() {
  const assignments: AssignmentProps[] | any[] = (await getAllAssignments()) || [];

  return (
    <div>
      <div className="grid lg:grid-cols-3 container md:grid-cols-2 grid-cols-1 gap-5 mt-5 ">
        {assignments.map((assignment) => {
          return (
            <div
              key={assignment.id}
              className="bg-transparent boxshadow rounded-md w-[100%]"
            >
              <div>
                <Link href={`/full-image/${assignment.id}`}>
                  <Image
                  className="h-[50%] rounded-md"
                    width={1980}
                    height={1980}
                    src={assignment.imageUrl}
                    alt=""
                  />
                </Link>
              </div>
              <div className="px-2 py-2">
                <h3 className="font-bold text-[17px] line-clamp-1">{assignment.title}</h3>
                <p className="text-[15px] line-clamp-2">{assignment.description}</p>
                <Link
                  className="text-[#16a34e] text-[14px] font-bold hover:border-b-[1px] border-b-gray-700"
                  href={assignment?.link}
                >
                  Link to website
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
