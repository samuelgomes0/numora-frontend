import { NextResponse } from "next/server";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/users`;

export async function GET() {
  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return new Response("Failed to fetch users", { status: response.status });
  }

  const users = await response.json();
  return NextResponse.json(users);
}
