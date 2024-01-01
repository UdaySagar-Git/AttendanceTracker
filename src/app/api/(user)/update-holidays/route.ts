import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import { db } from "@/libs/db";

export async function POST(req: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return NextResponse.json("Unauthorized");

  const id = currentUser?.id;
  const body = await req.json();

  const holidayArray = body.holidayArray;

  //divide holiday array into public and not public
  const publicHolidays = holidayArray.filter((holiday) => holiday.isPublic);
  const privateHolidays = holidayArray.filter((holiday) => !holiday.isPublic);

  // console.log(body);
  await db.user.update({
    where: { id: id },
    data: {
      holidays: privateHolidays,
      publicHolidays: publicHolidays,
    },
  });

  const user = await db.user.findUnique({
    where: { id: id },
    select: {
      id: true,
      email: true,
      image: true,
      classesData: true,
      holidays: true,
    },
  });

  return NextResponse.json({ message: "Data updated", user, status: 200 });
}
