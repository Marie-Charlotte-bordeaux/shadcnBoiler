import React from "react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Info, List, ShoppingCart, Users } from "lucide-react";
import { Link } from "react-router-dom";
export const IntroText = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center gap-4 mb-10">
  <h1 className="text-6xl sm:text-7xl font-extrabold text-white drop-shadow-lg">
    Bienvenue ici
  </h1>
  <h2 className="text-4xl sm:text-5xl font-bold text-indigo-400 drop-shadow-md">
    Tu vas voir c'est trop chouette !
  </h2>
</div>

      {/* <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Bienvenue sur votre base"
          words={[
            "Shadcn",
            "React",
            "Vite",
            "Tailwind CSS",
            "Aceternity UI",
            "Magic UI",
          ]}
        />
      </motion.div>
<div className='flex items-center justify-center gap-4'>
      <Button asChild>
        <Link to="/about">
          <Info />
          A propos
        </Link>
      </Button>
        <Button asChild>
          <Link to="/todo">
            <List />
            TodoList
          </Link>
        </Button>
        <Button asChild>
          <Link to="/admin/users">
            <Users />
            Admin
          </Link>
        </Button>
        <Button asChild>
          <Link to="/admin/products">
            <ShoppingCart />
            Products
          </Link>
        </Button>
        </div> */}
    </>
  );
};
