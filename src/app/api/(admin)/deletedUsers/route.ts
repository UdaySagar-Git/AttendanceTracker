import { NextResponse } from "next/server";
import { db } from "@/libs/db";
import getCurrentUser from "@/actions/getCurrentUser";

export async function GET(req: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (currentUser.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (currentUser.role === "admin") {
    const users = await db.deletedUsers.findMany({});
    return NextResponse.json(users);
  }
}
