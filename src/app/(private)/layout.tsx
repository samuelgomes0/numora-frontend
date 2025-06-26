import AppSidebar from "@/components/AppSidebar";
import HomeFooter from "../(public)/components/Footer";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background flex h-full min-h-screen w-full flex-col items-center">
      <AppSidebar />
      {children}
      <HomeFooter />
    </div>
  );
}

export default PublicLayout;
