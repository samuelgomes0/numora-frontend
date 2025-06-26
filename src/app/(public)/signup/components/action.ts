"use server";

import { NextResponse } from "next/server";
import z from "zod";

const signupValidationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

async function handleSignup(data: {
  name: string;
  email: string;
  password: string;
}) {
  const result = signupValidationSchema.safeParse(data);

  if (!result.success) {
    throw new Error(result.error.errors.map((e) => e.message).join(", "));
  }

  const { name, email, password } = result.data;

  try {
    await fetch("http://localhost:3333/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 },
    );
  }
}

export default handleSignup;
