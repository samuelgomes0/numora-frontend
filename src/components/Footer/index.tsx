function HomeFooter() {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="text-muted-foreground p-4 text-sm font-medium">
      © {thisYear} — Numora. Todos os direitos reservados.
    </footer>
  );
}

export default HomeFooter;
