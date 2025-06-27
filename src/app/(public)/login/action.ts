"use server";

import { loginFormValidationSchema } from "@/schemas";

async function handleLogin(email: string, password: string) {
  const result = loginFormValidationSchema.safeParse({ email, password });
  if (!result.success)
    throw new Error(result.error.errors.map((e) => e.message).join(", "));

  const { email: validEmail, password: validPassword } = result.data;

  try {
    const response = await fetch(`api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: validEmail, password: validPassword }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao realizar login");
    }

    return {
      success: true,
      message: "Login realizado com sucesso",
    };
  } catch {
    throw new Error("Erro ao realizar login. Tente novamente.");
  }
}

export default handleLogin;
