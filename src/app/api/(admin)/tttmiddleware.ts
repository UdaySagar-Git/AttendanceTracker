import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.json({ message: "Hello from the middleware!" });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*", "/getUserById", "/updateUser", "/userDetails"],
};
