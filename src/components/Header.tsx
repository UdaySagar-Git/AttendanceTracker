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

    <div className='shadow-md px-2 bg-white z-10 sticky top-0'>
      <div className='flex items-center justify-between p-2'>
        <div >
          <LuMenu className='text-2xl sm:hidden' />
        </div>
        <Link href='/'>
          <div className='text-2xl font-bold hidden sm:block'>
            Project
          </div>
        </Link>

        <div className='flex gap-3'>
          {
            currentUser?.role === 'admin' && (
              <Link href='/admin'>
                <button className='bg-red-500 hover:bg-red-800 text-white text-sm font-semibold py-2 px-3  rounded-lg ' >
                  Admin
                </button>
              </Link>
            )
          }
          <Link href="/profile">
            {!currentUser?.password ? (
              <button className='bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold py-2 px-3 w-[150px] rounded-lg ' >
                Create Password
              </button>
            ) : <button className='bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold py-2 px-3 w-[150px] rounded-lg ' >
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