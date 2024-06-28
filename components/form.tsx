// import React, { useState } from 'react'
// import { ToastComp } from './toastcomp'
// import UploadComp from './uploadcomp'
// import { X } from 'lucide-react'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'

// export default function Form() {
//   const [title,setTitle] = useState("")
//   const [description,setDescription] = useState("")
//   const [link,setlink] = useState("")
//   const [image,setImage] = useState("")
//   const router = useRouter()
//   async function handleSubmision(e:any){
// e.preventDefault()
// const newAssignment = {
//   title,description,link,image
// }
// const response =  await fetch("https://assignmentapi.vercel.app/api/assignments",{
//   method: "POST",
//   headers: {"Content-Type":"application/json"},
//   body: JSON.stringify(newAssignment)
//  })
//  if(response.status==200){
//    router.push("/")
//  }
//   }
//   return (
//     <div>
//       <section className="text-white lg:w-[35%] md:w-[90%] w-[80%]  bg-gray-900 fixed top-[12%] lg:left-[33%] md:left-[5%] left-[10%] rounded-md">
//   <div className="py-3 px-4 mx-auto max-w-2xl lg:py-6">
//     <div className='flex justify-between items-center'>
//     <h2 className="mb-6 text-xl font-bold text-white">Enter Assignment Details</h2>
//     <Link href='/' className="mb-6 text-xl font-bold text-white"><X /></Link>
//     </div>
//       <form onSubmit={handleSubmision} action="#">
//           <div className="">
//               <div className="sm:col-span-2 mb-[2rem]">
//                   <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Assignment Title</label>
//                   <input type="text" name="name" id="name" className="bg-transparent border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Assignment Title" 
//                    onChange={(e)=>setTitle(e.target.value)} value={title} ></input>
//               </div>
//               <div className="w-full mb-[2rem]">
//                   <label htmlFor="link" className="block mb-2 text-sm font-medium text-white">Enter link</label>
//                   <input type="text" name="link" id="link" className="bg-transparent border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 w-full" placeholder="Assignment link" 
//                   onChange={(e)=>setlink(e.target.value)} value={link}></input>
//               </div>
//                   <UploadComp/>        
//               <div className="sm:col-span-2">
//                   <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Description</label>
//                   <textarea id="description"   className="block p-2.5 w-full text-sm  bg-transparent rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize" placeholder="Enter description here" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
//               </div>
//           </div>
//           <ToastComp title='Create' description='Assignment created successfully'/>
//       </form>
//   </div>
// </section>
//     </div>
//   )
// }
