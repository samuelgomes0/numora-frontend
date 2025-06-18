import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function BackToButton() {
  return (
    <Link
      className="bg-muted-foreground/40 hover:bg-muted-foreground/60 absolute top-4 left-4 rounded-full p-2 transition-colors"
      href="/"
    >
      <ArrowLeft />
    </Link>
  );
}

export default BackToButton;
