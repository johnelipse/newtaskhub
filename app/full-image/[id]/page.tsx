

import { getSingleAssignment } from '@/actions/singleAssignment';
import { AssignmentProps } from '@/types/type'
import Image from 'next/image'
import React from 'react'

export  default async function Page({params:{id}}:any) {
  const singleAssignment:AssignmentProps | any = await getSingleAssignment({ params: { id } });
  return (
    <div className='flex justify-center items-center w-full'>
      <Image className='w-[85%] h-[20%] mt-32'  
       width={1200}
       height={630} 
      src={singleAssignment?.imageUrl} alt="loading" />
    </div>
  )
}
