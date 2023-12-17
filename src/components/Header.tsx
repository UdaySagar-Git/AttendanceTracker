"use client"

import React from 'react'
import Link from 'next/link';
import { LuMenu } from "react-icons/lu";
import SignoutButton from './SignoutButton';
import { User } from '@prisma/client';

interface Props {
  currentUser?: User | null;
}

const Header : React.FC<Props>= ({currentUser}) => {
  
  return (

    <div className='shadow-md px-2 sticky top-0 bg-white z-10'>
      <div className='flex items-center justify-between p-2'>
        <LuMenu className='text-2xl sm:hidden' />
        <Link href='/'>
          <div className='text-2xl font-bold hidden sm:block'>
            Project
          </div>
        </Link>
        <SignoutButton />
      </div>
    </div>
  )
}

export default Header