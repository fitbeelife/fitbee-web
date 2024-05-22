import { signout } from "@/app/sign-in/action";
import { NextRequest, NextResponse } from "next/server";
import { NextApiResponse } from "next";

export async function POST(request: NextRequest, response: NextResponse) {
  await signout();
  return NextResponse.redirect(`/`, {
    status: 200,
  });
}
