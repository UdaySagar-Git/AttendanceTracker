import { NextResponse } from "next/server";
import { db } from "@/libs/db";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(req: Request) {
  const body = await req.json();
  // console.log(body);

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (currentUser.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (currentUser.role === "admin") {
    const user = await db.user.update({
      where: {
        id: body.id,
      },
      data: {
        isBeta: body.isBeta,
      },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        emailVerified: true,
        image: true,
        role: true,
        isBeta: true,
        organisation: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return NextResponse.json(user);
  }
}
