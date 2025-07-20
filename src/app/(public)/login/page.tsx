import Paragraph from "@/components/Paragraph";
import PrimaryTitle from "@/components/PrimaryTitle";
import BackToButton from "../components/BackButton";
import LoginForm from "./components/LoginForm";

function LoginPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <BackToButton />
      <div className="flex w-full max-w-sm flex-col gap-2 space-y-4 px-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <PrimaryTitle text="Entrar" />
          <Paragraph
            text="Preencha os campos abaixo para acessar sua conta."
            className="text-sm"
          />
        </div>
        <LoginForm />
        {/* <Separator />
        <span className="text-muted-foreground text-sm">
          Não tem uma conta?{" "}
          <Link
            href="/signup"
            className="text-primary-foreground font-bold hover:underline"
          >
            Crie uma agora
          </Link>
        </span> */}
      </div>
    </div>
  );
}

export default LoginPage;
