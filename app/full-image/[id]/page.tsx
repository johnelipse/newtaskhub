import { getSingleAssignment } from '@/actions/singleAssignment';
import { AssignmentProps } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function Page({ params: { id } }: any) {
  const singleAssignment: AssignmentProps | any = await getSingleAssignment({ params: { id } });


  return (
    <div className='p-4'>
      <div className='flex lg:flex-row mx-auto justify-center md:flex-col sm:flex-col'>
      <div className=''>
        <Image
          className='w-[85%] rounded-md'
          width={1200}
          height={630}
          src={singleAssignment?.imageUrl}
          alt="loading"
        />
      </div>
      <div>
        <h3 className='lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] mt-3  font-bold mb-3'>{singleAssignment.title}</h3>
        <p>{singleAssignment.description}</p>
        <div className='mt-[2.5rem]'>
          <Link legacyBehavior  href={singleAssignment.imageUrl}>
  <a className='py-3 px-4 bg-black text-white rounded-md' download>Download Exercise Image</a>
</Link>
        </div>
      </div>
      </div>
      <div className='mt-[2rem]'>
        <h3 className='lg:text-[2rem] md:text-[1.5rem] text-[1.3rem] font-bold mb-3'>Word to Developers</h3>
        <p className='lg:line-clamp-none md:line-clamp-6 line-clamp-4'>Developer exercises are practical tasks designed to assess a programmer's skills and knowledge. These exercises often include coding challenges, debugging tasks, and algorithm problems. They test problem-solving abilities, familiarity with programming languages, and understanding of software development principles. Exercises may range from simple tasks, like writing a basic function, to complex projects, such as developing a full-stack application. By completing these exercises, developers demonstrate their capability to write clean, efficient code, adhere to best practices, and work within specified requirements. Such tasks are crucial in hiring processes, skill development, and real-world application of programming concepts.</p>
      </div>
    </div>
  );
}
