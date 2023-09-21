import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos, selectActiveItem } from "../../redux/todos/selectors";
import { addNewComment } from "../../redux/todos/slice";

import CommentsList from "../CommentsList/CommentsList";
import css from "./FormComments.module.css";

const FormComments = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#000000");

  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const activeItem = useSelector(selectActiveItem);

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case "text":
        setText(value);
        break;
      case "color":
        setColor(value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text && todos.length > 0) {
      const comment = {
        id: activeItem,
        text,
        color,
      };

      dispatch(addNewComment(comment));

      setText("");
      setColor("#000000");
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.title}>Comments #{activeItem}</h2>
      <CommentsList />
      <div className={css.wrapper}>
        <input
          className={css.input}
          type="color"
          name="color"
          onChange={handleChange}
          value={color}
        />
        <textarea
          className={css.textarea}
          name="text"
          onChange={handleChange}
          placeholder="Type comment here..."
          value={text}
          required
        ></textarea>
        <button type="submit" className={css.button}>
          Add New
        </button>
      </div>
    </form>
  );
};

export default FormComments;
