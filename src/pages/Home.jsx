import { IntroText } from "@/components/custom/intro-text";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <IntroText />    </div>
  );
};

 export const Compo = () => {
//logic
const name = "John";
const [age,setAge] = useState(20);

//return jsx
return (
  <div className="flex items-center justify-center gap-4 ">
    <div className="text-3xl font-bold text-gray-500 ">bonjour {name}, vous avez {age} ans</div>
    <Button className="bg-gray-500 text-white" onClick={() => {
      setAge(prev => prev + 1)
      }}>
        <Plus />
      </Button>
    </div>
  );
};
