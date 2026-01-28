import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "motion/react"

import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { TodoList } from "@/pages/TodoList"

import { AnimatedPage } from "@/components/AnimatedPage"

import { AdminLayout } from "@/components/layouts/AdminLayout"
import { TodoLayout } from "@/components/layouts/TodoLayout"

import { UsersAdminPage } from "@/pages/admin/users"
import { ProductsAdminPage } from "@/pages/admin/products"

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* PUBLIC */}
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />

        <Route
          path="/about"
          element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          }
        />

        {/* TODO (layout dédié) */}
        <Route path="/todo" element={<TodoLayout />}>
          <Route
            index
            element={
              <AnimatedPage>
                <TodoList />
              </AnimatedPage>
            }
          />
        </Route>

        {/* ADMIN (layout dédié) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            path="users"
            element={
              <AnimatedPage>
                <UsersAdminPage />
              </AnimatedPage>
            }
          />
          <Route
            path="products"
            element={
              <AnimatedPage>
                <ProductsAdminPage />
              </AnimatedPage>
            }
          />
        </Route>

      </Routes>
    </AnimatePresence>
  )
}

export default App
