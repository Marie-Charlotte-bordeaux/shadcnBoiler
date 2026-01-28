import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-14 flex items-center px-4 border-b border-slate-800 bg-gradient-to-r from-indigo-900 via-slate-900 to-black">
      <SidebarTrigger>
        <Menu className="w-6 h-6 text-white hover:text-indigo-400 transition-colors" />
      </SidebarTrigger>
    </header>
  );
};
