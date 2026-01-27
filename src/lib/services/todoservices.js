export const TodoServices = {
    toggle: (id,todos) => {
        return todos.map(todo=>todo.id === id?{...todo,completed:!todo.completed}:todo)
    }
}




