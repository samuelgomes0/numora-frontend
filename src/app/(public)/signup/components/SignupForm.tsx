"use client";

import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import handleSignup from "./action";
import FormError from "./FormError";

const signupFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Endereço de email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

function SignupForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const submitSignupForm = (values: z.infer<typeof signupFormSchema>) => {
    const { name, email, password } = values;

    startTransition(async () => {
      try {
        await handleSignup({ name, email, password });
        toast.success("Conta criada com sucesso!");
        redirect("/login");
      } catch (error) {
        console.error("Error during signup:", error);
        toast.error("Erro ao criar conta. Tente novamente.");
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitSignupForm)}
        className="w-full space-y-6 text-left"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field} />
              </FormControl>
              {form.formState.errors.name && (
                <FormError message={form.formState.errors.name.message} />
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@exemplo.com" {...field} />
              </FormControl>
              {form.formState.errors.email && (
                <FormError message={form.formState.errors.email.message} />
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  {...field}
                />
              </FormControl>
              {form.formState.errors.password && (
                <FormError message={form.formState.errors.password.message} />
              )}
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? <Spinner className="h-4 w-4" /> : `Criar conta`}
        </Button>
      </form>
    </Form>
  );
}

export default SignupForm;
