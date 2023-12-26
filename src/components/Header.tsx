"use client"

import React from 'react'
import Link from 'next/link';
import { LuMenu } from "react-icons/lu";
import SignoutButton from './SignoutButton';
import { User } from '@prisma/client';
import { IoHome } from "react-icons/io5";

interface Props {
  currentUser?: User | null;
}

const Header: React.FC<Props> = ({ currentUser }) => {

  const access = currentUser?.role === 'admin' || currentUser?.role === 'owner'

  return (

    <div className='shadow-md px-2 bg-white z-10 sticky top-0'>
      <div className='flex items-center justify-between p-2'>
        <Link href='/' className='text-2xl sm:hidden'>
          <LuMenu />
          {/* <IoHome /> */}
        </Link>
        <Link href='/'>
          <div className='text-2xl font-bold hidden sm:block'>
            <span className='text-red-800 text-4xl pr-2'>75</span>
            Attendence
          </div>
        </Link>

        <div className='flex gap-3'>
          {access && (
            <Link href='/admin'>
              <button className='bg-red-500 hover:bg-red-800 text-white text-sm font-semibold py-2 px-3  rounded-lg ' >
                {currentUser?.role === 'admin' ? 'Admin' : 'Owner'}
              </button>
            </Link>
          )
          }
          <Link href="/profile">
            {!currentUser?.password ? (
              <button className='bg-gray-950 hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold py-2 px-1 sm:px-3 w-[150px] rounded-lg ' >
                Create Password
              </button>
            ) : <button className='bg-gray-950 hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold py-2 px-1 sm:px-3 w-[150px] rounded-lg ' >
              Change Password
            </button>
            }
          </Link>
          <SignoutButton />
        </div>
      </div>
    </div>
  )
}

export default Header