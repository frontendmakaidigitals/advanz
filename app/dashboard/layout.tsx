import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { ReactNode } from "react";
import Head from "./head";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <Head />
        <main className="container mt-7">{children}</main>
      </div>
    </SidebarProvider>
  );
}
