
import getCurrentUser from "@/actions/getCurrentUser"
import Link from "next/link";

export default async function Home() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <div>
        <div className=" text-center text-3xl font-bold mt-20">
          sign in to view this page
        </div>
        <Link href="/signin">
          <div className="text-center mt-20 bg-gray-950 hover:bg-gray-800 text-white text-xl font-semibold py-4 px-6 rounded-lg w-[200px] mx-auto">
            Sign in
          </div>
        </Link>
      </div>
    )
  }

  if (currentUser?.email === "udaysagar.mail@gmail.com" || currentUser?.email === "doesmyemailmatters@gmail.com") {
    return (
      <div>
        <div className=" text-center text-3xl font-bold mt-20">
          Welcome Admin
        </div>
        <Link href="/admin">
          <div className="text-center mt-20 bg-gray-950 hover:bg-gray-800 text-white text-xl font-semibold py-4 px-6 rounded-lg w-[200px] mx-auto">
            Admin
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div>
        {JSON.stringify(currentUser)}
      </div>
    </div>
  )
}
