import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import HomeFooter from "../../components/Footer";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background flex h-full min-h-screen w-full flex-col items-center">
      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
      <HomeFooter />
    </div>
  );
}

export default PublicLayout;
