// import { useContext } from "react"
// import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"
import { Todo } from "../interfaces/interfaces"

interface Props {
    todo:Todo
}

export const TodoItem = ({todo}:Props) => {
  
    // const {toggleTodo} = useContext(TodoContext);

    // const handleDbClick = () => {
    //     toggleTodo(todo.id);
    // }
    const { toggleTodo } = useTodos();

  return (
    <li 
      style={{
        cursor:'pointer',
        textDecoration:todo.completed ? 'line-through' : ''
      }}
      onDoubleClick={() => toggleTodo(todo.id)}>
        {todo.desc}
    </li>
  )
}
