import Paragraph from "@/components/Paragraph";
import PrimaryTitle from "@/components/PrimaryTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WishlistForm from "./components/WishlistForm";

function Home() {
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
    </div>
  );
}

export default Home;
