import Paragraph from "@/components/Paragraph";
import PrimaryTitle from "@/components/PrimaryTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WishlistForm from "./components/WishlistForm";

async function Home() {
  const res = await fetch("http://localhost:3333/api/users", {
    method: "GET",
  });
  const users = await res.json();
  const userCount = users.length;

  return (
    <div className="mx-auto flex h-screen w-full max-w-xl flex-col items-center justify-center gap-6 p-4 text-center">
      <Button variant={"outline"} className="absolute top-4 md:right-4">
        <Link href="/login" className="text-white">
          Acesse sua conta
        </Link>
      </Button>
      <PrimaryTitle text="Eleve sua experiência financeira" />
      <Paragraph
        text="Assuma o controle das suas finanças com Numora, uma plataforma inteligente para gerenciar
        receitas, despesas e investimentos com clareza, segurança e
        sofisticação."
      />
      <WishlistForm />
      <span className="text-center text-sm">
        {`${userCount}`} pessoas já estão à espera — junte-se a elas!
      </span>
    </div>
  );
}

export default Home;
