"use server";

import { db } from "@/lib/db";
import { AssignmentProps } from "@/types/type";
import { revalidatePath } from "next/cache";

export async function createAssignment(data: AssignmentProps) {
  try {
    const assignment = await db.assignment.create({
      data,
    });
    revalidatePath("/")
    return {
      success: true,
      error: null,
      status: 201,
      data: assignment,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error,
      status: 500,
      data: null,
    };
  }
}

export async function getAllAssignments(){
try {
  const assignments =await db.assignment.findMany()
  return assignments
} catch (error) {
  console.log(error)
}
}

export async function getSingleAssignment({params:{id}}:any){
try {
  const singleAssignment = await db.assignment.findUnique(id)
  console.log(singleAssignment)
  return singleAssignment
} catch (error) {
 console.log(error) 
}
}
