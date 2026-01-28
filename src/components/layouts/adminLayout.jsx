import React from "react"
import { Outlet, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layouts/AppSidebar"
import { Header} from "@/components/layouts/Header"

export const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-950">
        
        {/* SIDEBAR */}
        <AppSidebar />

        {/* CONTENT */}
        <div className="flex flex-col flex-1">
          
          {/* TOP BAR */}
          {/* <header className="h-14 flex items-center justify-between px-4 border-b border-slate-800">
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center gap-2 text-slate-300">
                <ArrowLeft className="w-4 h-4" />
                Retour à l’accueil
              </Link>
            </Button>
          </header> */}
          <Header />
          
          {/* PAGE CONTENT */}
          <main className="flex-1 p-6">
            <Outlet />
          </main>

        </div>
      </div>
    </SidebarProvider>
  )
}
