"use server"
import { db } from "@/lib/db"

export async function getSingleAssignment({ params: { id } }: any) {
  try {
    const singleAssignment = await db.assignment.findUnique({
      where: { id: id }
    })
    console.log(singleAssignment)
    return singleAssignment
  } catch (error) {
    console.log(error)
  }
}
