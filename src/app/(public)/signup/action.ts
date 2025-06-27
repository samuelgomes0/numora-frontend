"use server";

import { signupFormValidationSchema } from "@/schemas";

async function handleSignup(name: string, email: string, password: string) {
  const result = signupFormValidationSchema.safeParse({
    name,
    email,
    password,
  });

  if (!result.success)
    throw new Error(result.error.errors.map((e) => e.message).join(", "));

  const {
    name: validName,
    email: validEmail,
    password: validPassword,
  } = result.data;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: validName,
        email: validEmail,
        password: validPassword,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao criar conta");
    }

    return {
      success: true,
      message: "Account created successfully",
    };
  } catch {
    throw new Error("Erro ao criar conta. Tente novamente.");
  }
}

export default handleSignup;
