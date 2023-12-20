import { NextResponse } from "next/server";
import { db } from "@/libs/db";
import getCurrentUser from "@/actions/getCurrentUser";

export async function GET(req: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.redirect("/login");
  }

  if (currentUser.role !== "admin") {
    return NextResponse.redirect("/");
  }

  if (currentUser.role === "admin") {
    const users = await db.user.findMany({});
    return NextResponse.json(users);
  }
}
