import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Home } from "@/pages/Home";
import { AnimatedPage } from "@/components/AnimatedPage";
import { About } from "@/pages/About";
import { TodoList } from "@/pages/TodoList";

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
      </Routes>
    </AnimatePresence>
  );
}

export default App;
