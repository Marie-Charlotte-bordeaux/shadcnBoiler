import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";

import { CheckSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const TodoSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar className="bg-gradient-to-b from-indigo-900 via-slate-900 to-black text-white">
      <SidebarContent className="bg-gradient-to-b from-indigo-900 via-slate-900 to-black text-white">

        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold text-indigo-400">
            Todo List
          </SidebarGroupLabel>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === "/"}
                className="flex items-center gap-2 hover:bg-indigo-800 transition rounded-lg px-3 py-2"
              >
                <Link to="/">
                  <CheckSquare className="w-5 h-5" />
                  Accueil
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  );
};
