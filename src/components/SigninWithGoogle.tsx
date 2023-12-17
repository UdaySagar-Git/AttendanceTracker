import React from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-hot-toast';

const SigninWithGoogle = () => {
  const router = useRouter();
  const loginWithGoogle = async () => {
    const response = await signIn('google', { callbackUrl: '/' });
    // console.log(response);
    if (response?.ok) {
      // console.log(response);
      toast.success('Signin successful');
      router.push('/');
    }
    if (response?.error) {
      toast.error(response.error);
    }
  };

  return (
    <button onClick={(e) => { e.preventDefault(); loginWithGoogle() }} className='bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold py-2 px-3 flex rounded-lg w-[300px] my-3 mx-auto gap-3 items-center '>
      <FcGoogle />Continue with Google
    </button>
  );
};

export default SigninWithGoogle;
