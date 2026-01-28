import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";

import { ShoppingCart, BarChart3, Package } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const AppSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar className="bg-gradient-to-b from-indigo-900 via-slate-900 to-black text-white">
      <SidebarContent className="bg-gradient-to-b from-indigo-900 via-slate-900 to-black text-white">

        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold text-indigo-400 mb-2">
            ADMIN
          </SidebarGroupLabel>

          <SidebarMenu>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === "/"}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-800 transition"
              >
                <Link to="/">
                  <BarChart3 className="w-5 h-5" />
                  Home
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={location.pathname.startsWith("/admin/users")}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-800 transition"
              >
                <Link to="/admin/users">
                  <ShoppingCart className="w-5 h-5" />
                  Users
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={location.pathname.startsWith("/admin/products")}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-800 transition"
              >
                <Link to="/admin/products">
                  <Package className="w-5 h-5" />
                  Products
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

          </SidebarMenu>
        </SidebarGroup>

      </SidebarContent>

    </Sidebar>
  );
};
