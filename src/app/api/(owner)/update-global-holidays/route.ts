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

  if (currentUser.role !== "owner") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (currentUser.role === "owner") {
    const users = await db.user.updateMany({
      where: {},
      data: {
        publicHolidays : body.holidayArray
      },
    });
    return NextResponse.json(users);
  }
}
