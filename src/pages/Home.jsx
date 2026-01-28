import { IntroText } from "@/components/custom/intro-text";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-indigo-900 via-slate-900 to-black text-white px-6 py-20 gap-10">

      {/* Intro / Welcome */}
      <div className="text-center max-w-3xl">
        <IntroText />
        <p className="mt-4 text-slate-300 text-lg">
          Te voila sur votre tableau de bord futuriste ! Gére tes produits, utilisateurs et tâches facilement.
        </p>
      </div>

      {/* Navigation vers sections principales */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild className="bg-indigo-600 hover:bg-indigo-500 transition flex items-center gap-2">
          <Link to="/todo">
            <Plus className="w-4 h-4" />
            TodoList
          </Link>
        </Button>

        <Button asChild className="bg-gray-700 hover:bg-gray-600 transition flex items-center gap-2">
          <Link to="/admin/users">
            Users Admin
          </Link>
        </Button>

        <Button asChild className="bg-gray-700 hover:bg-gray-600 transition flex items-center gap-2">
          <Link to="/admin/products">
            Products Admin
          </Link>
        </Button>

        <Button asChild className="bg-green-600 hover:bg-green-500 transition flex items-center gap-2">
          <Link to="/about">
            A propos
          </Link>
        </Button>
      </div>


      {/* Interactive component */}
      <Compo />
    </div>
  );
};

export const Compo = () => {
  const name = "John";
  const [age, setAge] = useState(20);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-6 bg-slate-800/50 rounded-2xl shadow-lg">
      <div className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left">
        Bonjour {name}, vous avez {age} ans
      </div>
      <Button
        className="bg-indigo-500 hover:bg-indigo-400 text-white transition flex items-center justify-center"
        onClick={() => setAge(prev => prev + 1)}
      >
        <Plus className="w-5 h-5" />
      </Button>
    </div>
  );
};
