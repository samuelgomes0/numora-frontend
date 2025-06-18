import { cn } from "@/lib/utils";

interface PrimaryTitleProps {
  text: string;
  className?: string;
}

function PrimaryTitle({ text, className }: PrimaryTitleProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl",
        "bg-gradient-to-br from-[#c0a2f9] to-primary bg-clip-text text-transparent",
        className
      )}
    >
      {text}
    </h1>
  );
}

export default PrimaryTitle;
