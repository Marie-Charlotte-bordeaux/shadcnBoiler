import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Plus, Trash } from "lucide-react";
import { Link } from "react-router-dom";

export const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (newTodo.trim() === "") return;
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: newTodo,
        completed: false,
      },
    ]);
    setNewTodo("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-indigo-900 via-slate-900 to-black text-white px-6 py-20 gap-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mb-10">
        <h1 className="text-6xl sm:text-7xl font-extrabold drop-shadow-lg">
          TodoList
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 drop-shadow-md mt-2">
          Organise tes tâches comme un pro !
        </h2>
        <p className="mt-4 text-slate-300 text-lg">
          Ajoute, supprime et complète tes tâches facilement depuis ton dashboard.
        </p>
      </div>

      {/* Add Todo */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
        <Input
          placeholder="Ajouter une tâche..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1"
        />
        <Button
          onClick={addTodo}
          disabled={newTodo.trim() === ""}
          className="bg-indigo-500 hover:bg-indigo-400 transition flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Ajouter
        </Button>
      </div>

      {/* Todo List */}
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        {todos.map((todo) => (
          <Card
            key={todo.id}
            className={`w-full max-w-md ${
              todo.completed ? "bg-green-900/50" : "bg-slate-800/50"
            } rounded-2xl shadow-lg`}
          >
            <CardContent>
              <h3
                className={`text-lg sm:text-xl font-semibold ${
                  todo.completed ? "line-through text-green-300" : "text-white"
                }`}
              >
                {todo.title}
              </h3>
            </CardContent>
            <CardFooter className="flex items-center justify-between gap-2">
              <Button
                onClick={() => toggleTodo(todo.id)}
                className={`${
                  todo.completed ? "bg-green-600 hover:bg-green-500" : "bg-indigo-500 hover:bg-indigo-400"
                } transition`}
              >
                <Check className="w-4 h-4" />
              </Button>
              <Button className="bg-red-600 hover:bg-red-500 transition" onClick={() => deleteTodo(todo.id)}>
                <Trash className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Back Home */}
      <div className="mt-10">
        <Button asChild className="bg-gray-700 hover:bg-gray-600 transition">
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
};
