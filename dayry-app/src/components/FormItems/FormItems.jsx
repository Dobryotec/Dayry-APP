import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../redux/todos/operations";

import css from "./FormItems.module.css";

const FormItems = () => {
  const [textItem, setTextItem] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (textItem) {
      const newItem = {
        textTodo: textItem,
      };
      dispatch(addNewTodo(newItem));
      setTextItem("");
    }
  };

  const handleChange = ({ target: { value } }) => {
    setTextItem(value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h1 className={css.title}>Items</h1>
      <div className={css.wrapper}>
        <input
          className={css.input}
          type="text"
          required
          onChange={handleChange}
          placeholder="Type name here..."
          value={textItem}
        />
        <button type="submit" className={css.button}>
          Add New
        </button>
      </div>
    </form>
  );
};

export default FormItems;
