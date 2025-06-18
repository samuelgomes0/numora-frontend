import Paragraph from "@/components/Paragraph";
import PrimaryTitle from "@/components/PrimaryTitle";
import WishlistForm from "./components/WishlistForm";

function Home() {
  return (
    <div className="w-full mx-auto h-screen max-w-xl text-center flex flex-col items-center justify-center gap-6 p-4">
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
