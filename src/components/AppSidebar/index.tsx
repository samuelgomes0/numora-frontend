import {
  Calendar,
  CreditCard,
  Home,
  Inbox,
  PiggyBank,
  Settings,
  TrendingUp,
  Wallet,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Transações",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Receitas",
    url: "#",
    icon: TrendingUp,
  },
  {
    title: "Despesas",
    url: "#",
    icon: Wallet,
  },
  {
    title: "Economias",
    url: "#",
    icon: PiggyBank,
  },
  {
    title: "Cartões",
    url: "#",
    icon: CreditCard,
  },
  {
    title: "Relatórios",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Configurações",
    url: "#",
    icon: Settings,
  },
];

function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex items-center justify-center">
        <h1 className="text-2xl font-bold">Finanças</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Aplicação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
