"use server";

import { z } from "zod";

const emailValidationSchema = z.object({
  email: z.string().email(),
});

export async function processWishlistSubmission(formData: FormData) {
  const rawEmail = formData.get("email");

  console.log("Raw email received:", rawEmail);

  const result = emailValidationSchema.safeParse({ email: rawEmail });

  if (!result.success) {
    throw new Error("Endereço de email inválido");
  }

  // const { email } = result.data;

  try {
    // Call email sending service
    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    throw new Error("Erro no envio do email");
  }
}
