"use client"
import { signOut } from "next-auth/react"

const SignoutButton = () => {
  return (
    <div>
      <button className='bg-rose-700 hover:bg-rose-600 text-white text-sm font-semibold py-2 px-3 w-[80px] rounded-lg block'
        onClick={() => signOut({ callbackUrl: '/signin' })}>
        SignOut
      </button>
    </div>
  )
}

export default SignoutButton