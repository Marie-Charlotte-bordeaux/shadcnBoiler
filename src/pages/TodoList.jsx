import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Plus, Trash } from "lucide-react";

export const TodoList = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);


    function addTodo(){
       setTodos([...todos,{
        id: todos.length + 1,
        title: newTodo,
        completed: false,
    }])
    }

function toggleTodo(id){
    setTodos(todos.map(todo=>todo.id === id?{...todo,completed:!todo.completed}:todo))
}

    function deleteTodo(id){
        setTodos(todos.filter(todo=>todo.id !== id))
    }

    function handleInputChange(e){
        if(e.target.value.trim() !== ""){
        setNewTodo(e.target.value)
        }
        else{
            setNewTodo("")
        }
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">TodoList</h1>
      <div className="flex  items-center justify-center gap-2">
        <Input placeholder="Add Todo" onChange={handleInputChange}/>
        <Button onClick={addTodo} disabled={newTodo.trim() === ""}>
            <Plus />
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        {todos.map((todo)=>(
            <Card key={todo.id} className="w-full min-w-md max-w-md">
                <CardContent>
                <h3>{todo.title}</h3>
                </CardContent>
                <CardFooter className="flex items-center justify-between gap-2">
                    <Button onClick={() => toggleTodo(todo.id)}>
                        <Check className={todo.completed ? "text-green-500 " : null} />
                    </Button>
                    <Button onClick={() => deleteTodo(todo.id)}>
                        <Trash />
                    </Button>
                </CardFooter>
            </Card>
        ))}
      </div>
    </div>
  );
};