
export default async function gettingAllAssignments(){
   try {
    const response = await fetch("https://assignmentapi.vercel.app/api/assignments")
    const assignments = await response.json()
    const allAssignments = assignments.data
       return allAssignments
   } catch (error) {
    console.log(error)
   }
}
