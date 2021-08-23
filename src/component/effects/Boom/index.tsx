import { useMouseDown } from "../hook";

export default () => {
  const { isDown, onMouseDown, onMouseUp } = useMouseDown();

  return (
    <div
      className={`
            ${isDown ? "" : "hover:bg-gray-400 hover:bg-opacity-20"}
            ${isDown ? "bg-gray-400 bg-opacity-40" : ""}
            absolute
            inset-0
        `}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    ></div>
  );
};
