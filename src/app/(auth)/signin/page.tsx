"use client"

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SigninWithGoogle from "@/components/SigninWithGoogle";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const page = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
        // callbackUrl: '/'
      });

      if (response?.ok) {
        toast.success("Signin successful");
        router.refresh()
        router.push('/');
      }
      // console.log(response);
    } catch (error) {
      // Handle error
      toast.error("Signin failed");
    }
  }

  return (
    <div className="w-[500px] m-auto ">
      <SigninWithGoogle />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 px-2 py-1 rounded-lg"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 px-2 py-1 rounded-lg"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && <p className="text-red-500">Password must have more than 8 characters</p>}
          <button
            type="submit"
            className="bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold py-2 px-3 rounded-lg"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
