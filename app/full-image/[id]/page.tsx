import { getSingleAssignment } from '@/actions/assignments'
import Image from 'next/image'
import React from 'react'

export  default async function Page({params:{id}}:any) {
  await getSingleAssignment(id)
  return (
    <div className='flex justify-center items-center w-full'>
      <Image className='w-[85%] h-[20%] mt-32' width={1200} height={630} src="/banner.webp" alt="loading" />
    </div>
  )
}
