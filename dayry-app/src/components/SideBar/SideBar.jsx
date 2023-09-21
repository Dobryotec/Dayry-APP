import css from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={css.sideBar}>
      <aside className={css.aside}>
        <h2 className={css["aside-title"]}>dayry app</h2>
        <p className={css["aside-text"]}>Comment whit no sense</p>
      </aside>
    </div>
  );
};

export default SideBar;
