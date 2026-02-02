"use client";
import { Home, Book, MessageSquareQuote } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Logo from "@/app/(user)/components/Logo";

const items = [
  {
    title: "Visit Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Blogs",
    url: "dashboard/Blogs",
    icon: Book,
  },

  {
    title: "Queries",
    url: "dashboard/Queries",
    icon: MessageSquareQuote,
  },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar>
      <SidebarContent className="py-5">
        <SidebarTrigger
          className={`bg-red-900 hover:bg-red-800 z-10 ${
            open ? "-translate-x-1/2" : "-translate-x-2"
          } size-10 text-white hover:text-white rounded-full left-full  top-24 absolute`}
        />
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-center mt-5">
            <Logo />
          </SidebarGroupLabel>
          <SidebarGroupContent className=" mt-20">
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-red-900 hover:text-slate-50 py-5 transition-colors duration-250"
                  >
                    <Link href={`/${item.url}`}>
                      <item.icon className="!w-5 !h-5" />
                      <span>{item.title}</span>
                    </Link>
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
