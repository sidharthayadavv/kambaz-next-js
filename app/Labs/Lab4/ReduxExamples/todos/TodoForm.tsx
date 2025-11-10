import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { RootState } from "../../store";

export default function TodoForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroupItem className="d-flex">
      <FormControl className="me-3 d-flex" value={todo.title}
        onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
      <Button className="ms-auto bg-success border-0 me-1" onClick={() =>  dispatch(addTodo(todo))}
              id="wd-add-todo-click"> Add </Button>
      <Button className="ms-auto bg-warning border-0" onClick={() =>  dispatch(updateTodo(todo))}
              id="wd-update-todo-click"> Update </Button>
    </ListGroupItem>
);}
