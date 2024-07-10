
import { LoaderCircle } from 'lucide-react'
import React from 'react'

export default function Loading() {
  return (
    <div className=''>
      <div className='bg:black fixed lg:top-[35%] md:top-[35%] top-[50%]  fire'>
      <LoaderCircle className='animate-spin w-20 h-20 text-green-600  dark:text-white'/>
    </div>
    </div>
  )
}
