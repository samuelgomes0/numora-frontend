const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET(request: Request) {
  const url = `${API_URL}/users`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return new Response("Failed to fetch users", { status: response.status });
  }

  const users = await response.json();

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
