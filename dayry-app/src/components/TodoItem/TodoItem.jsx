import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/todos/operations";
import { selectComments } from "../../redux/todos/selectors";
import { setActiveItem } from "../../redux/todos/slice";
import css from "./TodoItem.module.css";

const TodoItem = ({ textTodo, id }) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);

  const countComments = comments.reduce(
    (count, comment) => (comment.id === id ? count + 1 : count),
    0
  );

  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    return () => {
      dispatch(setActiveItem(""));
    };
  }, [dispatch]);

  return (
    <>
      <p>{textTodo}</p>
      <div>
        <span className={css.count}>{countComments}</span>
        <button className={css["button-delete"]} onClick={() => removeTodo(id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoItem;
