import { NextResponse } from "next/server";

export async function GET() {
  // const { searchParams } = new URL(request.url)
  const res = {
    title: "Hellow World!",
  };

  return NextResponse.json(res);
}
