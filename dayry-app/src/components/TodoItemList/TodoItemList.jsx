import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTodos } from "../../redux/todos/operations";
import { setActiveItem } from "../../redux/todos/slice";
import { selectActiveItem, selectTodos } from "../../redux/todos/selectors";

import TodoItem from "../TodoItem/TodoItem";
import css from "./TodoItemList.module.css";

const TodoItemList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const activeItem = useSelector(selectActiveItem);

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  useEffect(() => {
    if (todos.length > 0 && activeItem === "") {
      dispatch(setActiveItem(todos[todos.length - 1].id));
    }
  }, [dispatch, todos, activeItem]);

  const handleItemClick = (id) => {
    dispatch(setActiveItem(id));
  };

  return (
    <ul className={css.list}>
      {todos.map(({ id, textTodo }) => (
        <li
          key={id}
          onClick={() => handleItemClick(id)}
          className={activeItem === id ? css.active : css.item}
        >
          <TodoItem textTodo={textTodo} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default TodoItemList;
