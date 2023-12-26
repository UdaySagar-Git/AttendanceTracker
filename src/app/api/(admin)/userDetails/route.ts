import { NextResponse } from "next/server";
import { db } from "@/libs/db";
import getCurrentUser from "@/actions/getCurrentUser";

export async function GET(req: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const access = currentUser.role === "admin" || currentUser.role === "owner";

  if (!access) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (access) {
    const users = await db.user.findMany({});
    return NextResponse.json(users);
  }
}
