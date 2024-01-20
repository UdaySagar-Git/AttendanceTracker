"use client"

import React from 'react'
import Link from 'next/link';
import { LuMenu } from "react-icons/lu";
import { User } from '@prisma/client';
import UserProfile from './UserProfile';
import { IoHome } from "react-icons/io5";

type newUser = User

interface Props {
  currentUser?: newUser | null;
}

const Header: React.FC<Props> = ({ currentUser }) => {

  const access = currentUser?.role === 'admin' || currentUser?.role === 'owner'

  return (

    <div className='shadow-md px-2 bg-white z-10 sticky top-0'>
      <div className='flex items-center justify-between p-2'>
        
        {/* <Link href='/' className='text-2xl sm:hidden'> */}
          {/* <LuMenu /> */}
          {/* <IoHome /> */}
        {/* </Link> */}

        <Link href='/'>
          <div className='text-sm md:text-2xl font-bold '>
            <span className='text-red-800 text-2xl md:text-4xl pr-1'>75</span>
            Attendance
          </div>
        </Link>
        <UserProfile currentUser={currentUser} access={access} />
      </div>
    </div>
  )
}

export default Header