import { BlurFade } from "@/components/magicui/blur-fade";
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
  const userCount = users.length || 0;

  return (
    <div className="mx-auto flex h-screen w-full max-w-xl flex-col items-center justify-center gap-6 p-4 text-center">
      <Button variant={"outline"} className="absolute top-4 md:right-4" asChild>
        <Link href="/login" className="text-white">
          Acesse sua conta
        </Link>
      </Button>
      <BlurFade duration={0.5} delay={0} inView>
        <PrimaryTitle text="Eleve sua experiência financeira" />
      </BlurFade>
      <BlurFade duration={0.5} delay={0.05} inView>
        <Paragraph
          text="Assuma o controle das suas finanças com Numora, uma plataforma inteligente para gerenciar
        receitas, despesas e investimentos com clareza, segurança e
        sofisticação."
        />
      </BlurFade>
      <BlurFade
        duration={0.5}
        delay={0.1}
        inView
        className="flex w-full flex-col gap-6 px-4"
      >
        <WishlistForm />
        <span className="text-center text-sm">
          {`${userCount || 0}`} pessoas já estão à espera — junte-se a elas!
        </span>
      </BlurFade>
    </div>
  );
}

export default Home;
