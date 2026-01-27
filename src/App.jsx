import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Home } from "@/pages/Home";
import { AnimatedPage } from "@/components/AnimatedPage";
import { About } from "@/pages/About";
import { TodoList } from "@/pages/TodoList";
import { AdminLayout } from "@/components/layouts/adminLayout";
import { UsersAdminPage } from "@/pages/admin/users";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
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
        <Route
          path="/todo"
          element={
            <AnimatedPage>
              <TodoList />
            </AnimatedPage>
          }
        />
        <Route element={<AdminLayout />}>
          <Route path="/admin/users" element={
            <AnimatedPage>
              <UsersAdminPage />
            </AnimatedPage>
            } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
