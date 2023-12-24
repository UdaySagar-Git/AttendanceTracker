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
    return NextResponse.json(
      { message: "You are not allowed to do this." },
      { status: 401 }
    );
  }

  if (currentUser.role === "admin") {
    const user = await db.user.update({
      where: {
        id: body.id,
      },
      data: {
        role: "deleted",
      },
    });
    const deletedUser = await db.deletedUsers.create({
      data: {
        ...user,
      },
    });
    await db.user.delete({
      where: {
        id: body.id,
      },
    });

    return NextResponse.json({ message: "User deleted", deletedUser });
  }
}
