import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function BackToButton() {
  return (
    <Button
      variant="outline"
      asChild
      className="absolute top-4 left-4 z-10 flex h-10 w-10 rounded-full md:top-6 md:left-6"
    >
      <Link href="/">
        <ArrowLeft />
      </Link>
    </Button>
  );
}

export default BackToButton;
