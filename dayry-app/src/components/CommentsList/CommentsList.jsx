import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectComments, selectActiveItem } from "../../redux/todos/selectors";

import CommentItem from "../CommentItem/CommentItem";

import css from "./CommentsList.module.css";

const CommentsList = () => {
  const comments = useSelector(selectComments);
  const activeItem = useSelector(selectActiveItem);

  const visibleComments = comments.filter(
    (comment) => comment.id === activeItem
  );

  return (
    <div>
      {visibleComments.map(({ text, color, id }, index) => (
        <div key={`${id}_${index}`} className={css["wrapper-comment"]}>
          <CommentItem color={color} text={text} />
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
