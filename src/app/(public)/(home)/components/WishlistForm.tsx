"use client";

import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";
import { processWishlistSubmission } from "../action";

function WishlistForm() {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      try {
        await processWishlistSubmission(formData);
        toast.success("Email cadastrado com sucesso!");
      } catch {
        toast.error("Erro ao enviar o email. Tente novamente mais tarde.");
      } finally {
        form.reset();
      }
    });
  };

  return (
    <form className="relative mt-4 w-full" onSubmit={handleSubmit}>
      <Input
        className="h-14 px-4 backdrop-blur-sm"
        placeholder="Insira seu melhor email"
        type="email"
        name="email"
        required
      />
      <Button
        type="submit"
        className="absolute top-1.5 right-2 h-11"
        disabled={isPending}
      >
        {isPending ? (
          <Spinner className="h-4 w-4" />
        ) : (
          <>
            {"Entrar na lista de espera"}
            <ArrowRight />
          </>
        )}
      </Button>
    </form>
  );
}

export default WishlistForm;
