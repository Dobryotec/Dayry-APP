import SideBar from "../SideBar/SideBar";
import FormItems from "../FormItems/FormItems";
import TodoItemList from "../TodoItemList/TodoItemList";
import FormComments from "../FormComments/FormComments";

import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.container}>
      <main className={css.wrapper}>
        <SideBar />
        <div className={css["container-forms"]}>
          <div className={css["container-items"]}>
            <FormItems />
            <TodoItemList />
          </div>
          <FormComments />
        </div>
      </main>
    </div>
  );
};

export default App;
