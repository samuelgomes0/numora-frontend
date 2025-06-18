import LoginForm from "./components/LoginForm";
import BackToButton from "./components/ReturnButton";

function LoginPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <BackToButton />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
