const CommentItem = ({ color, text }) => {
  return (
    <>
      <div
        style={{ backgroundColor: color, width: "68px", height: "50px" }}
      ></div>
      <div>{text}</div>
    </>
  );
};

export default CommentItem;
