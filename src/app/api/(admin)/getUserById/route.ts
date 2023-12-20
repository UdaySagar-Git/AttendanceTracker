import { NextResponse } from "next/server";
import { db } from "@/libs/db";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(req: Request) {
  const body = await req.json();
  // console.log(body);

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.redirect("/login");
  }

  if (currentUser.role !== "admin") {
    return NextResponse.redirect("/");
  }

  if (currentUser.role === "admin") {
    const user = await db.user.findUnique({
      where: {
        id: body.id,
      },
    });
    return NextResponse.json(user);
  }
}
