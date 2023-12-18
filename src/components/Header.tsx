"use client"

import React from 'react'
import Link from 'next/link';
import { LuMenu } from "react-icons/lu";
import SignoutButton from './SignoutButton';
import { User } from '@prisma/client';

interface Props {
  currentUser?: User | null;
}

const Header: React.FC<Props> = ({ currentUser }) => {

  return (

    <div className='shadow-md px-2 sticky top-0 bg-white z-10'>
      <div className='flex items-center justify-between p-2'>
        <LuMenu className='text-2xl sm:hidden' />
        <Link href='/'>
          <div className='text-2xl font-bold hidden sm:block'>
            Project
          </div>
        </Link>
        <div className='flex gap-3'>
          <Link href="/profile">
            {!currentUser?.password ? (
              <button className='bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold py-2 px-3 w-[150px] rounded-lg hidden sm:block' >
                Create Password
              </button>
            ) : <button className='bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold py-2 px-3 w-[150px] rounded-lg hidden sm:block' >
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