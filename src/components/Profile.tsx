"use client"

// Import statements
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const Profile = ({ currentUser }) => {
  const email = currentUser?.email;
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {


    if (data.newPassword !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!currentUser || !currentUser?.email) {
      toast.error("An error occurred while updating the profile");
      return;
    }

    try {
      const response = await fetch("/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, email }),
      });

      if (response?.ok) {
        toast.success("Profile updated successfully");
        window.location.href = '/';
        return;
      }
      if (!response.ok) {
        // Handle server-side errors
        const errorData = await response.json();
        toast.error(errorData.message);
        return;
      }


    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while updating the profile");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[80vh]">
      <div className="w-[500px] m-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <div className="flex gap-6">
              <label className="text-lg font-medium w-[35%] ">Email</label> <span className="font-bold">:</span>
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 px-2 py-1 rounded-lg bg-slate-400/40"
                value={email}
                disabled
              />
            </div>
            {currentUser?.password && (
              <div className="flex gap-6">
                <label className="text-lg font-medium w-[35%] ">Password</label> <span className="font-bold">:</span>
                <input
                  type="password"
                  placeholder="Old Password"
                  className="border border-gray-300 px-2 py-1 rounded-lg"
                  {...register("oldPassword")}
                />
              </div>
            )}
            <div className="flex gap-6">
              <label className="text-lg font-medium w-[35%] ">New Password</label> <span className="font-bold">:</span>
              <input
                type="password"
                placeholder="New Password"
                className="border border-gray-300 px-2 py-1 rounded-lg"
                {...register("newPassword", { required: true, minLength: 8 })}
              />
            </div>
            {errors.newPassword?.type == "required" && <span className="text-red-500">Password is required</span>}
            {errors.newPassword?.type == "minLength" && <span className="text-red-500">Password must have more than 8 characters</span>}
            <div className="flex gap-6">

              <label className="text-lg font-medium w-[35%] ">Confirm Password</label> <span className="font-bold">:</span>
              <input
                type="password"
                placeholder="Confirm Password"
                className="border border-gray-300 px-2 py-1 rounded-lg"

                {...register("confirmPassword", { required: true, minLength: 8 })}
              />
            </div>
            {errors.confirmPassword?.type == "required" && <span className="text-red-500">Confirm Password is required</span>}


            <button
              type="submit"
              className="bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold py-2 px-3 rounded-lg mt-4"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
