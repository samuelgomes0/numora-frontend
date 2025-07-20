import Paragraph from "@/components/Paragraph";
import PrimaryTitle from "@/components/PrimaryTitle";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import SignupForm from "./components/SignupForm";
import BackToButton from "../components/BackButton";

function SignupPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <BackToButton />
      <div className="flex w-full max-w-sm flex-col gap-2 space-y-4 px-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <PrimaryTitle text="Criar conta" />
          <Paragraph
            text="Preencha os campos abaixo para criar uma conta."
            className="text-sm"
          />
        </div>
        <SignupForm />
        <Separator />
        <span className="text-muted-foreground text-sm">
          Já tem uma conta?{" "}
          <Link
            href="/login"
            className="text-primary-foreground font-bold hover:underline"
          >
            Faça login
          </Link>
        </span>
      </div>
    </div>
  );
}

export default SignupPage;
