import React from "react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";
export const IntroText = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Bienvenue sur votre base"
          words={[
            "Shadcn",
            "React",
            "Vite",
            "Tailwind CSS",
            "Aceternity UI",
            "magicui",
          ]}
        />
      </motion.div>

      <Button asChild>
        <Link to="/about">
          <Info />
          About
        </Link>
      </Button>
    </div>
  );
};
