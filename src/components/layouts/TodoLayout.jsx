import { Outlet, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

import { SidebarProvider } from "@/components/ui/sidebar"
import { TodoSidebar } from "@/components/layouts/TodoSidebar"
import { Header } from "@/components/layouts/Header"
import { Button } from "@/components/ui/button"

export const TodoLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-950">

        {/* SIDEBAR TODO */}
        <TodoSidebar />

        {/* CONTENT */}
        <div className="flex flex-col flex-1">
          
          {/* TOP BAR */}
          <Header />
          

          <main className="flex-1 p-6">
            <Outlet />
          </main>

        </div>
      </div>
    </SidebarProvider>
  )
}
