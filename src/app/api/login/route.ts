import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  console.log("Login request received");

  try {
    const { email, password } = await request.json();

    console.log("Email:", email);
    console.log("Password:", password);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return new Response(JSON.stringify({ error: errorData.message }), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Erro ao realizar login. Tente novamente." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
