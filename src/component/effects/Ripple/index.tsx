export const ripple = "ripple";

/* import { useMouseDown } from "./../hook";

const RippleSpan = () => (
  <span
    className={`
      w-0 
      h-0 
      rounded-full
      bg-white
      bg-opacity-50
      absolute
      transform scale-0
      opacity-100
  `}
  ></span>
);

const ripple = (event: any) => {
  const btn = event.currentTarget;
  const boundingBoundary = btn.getBoundingClientRect();

  // Setup
  let posX = boundingBoundary.left;
  let posY = boundingBoundary.top;
  let buttonWidth = boundingBoundary.width;
  let buttonHeight = boundingBoundary.height;

  // Add the element
  let ripple = document.createElement("span");

  btn.appendChild(ripple);

  // Make it round!
  if (buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight;
  }

  // Get the center of the element
  var x = event.pageX - posX - buttonWidth / 2;
  var y = event.pageY - posY - buttonHeight / 2;

  ripple.style.width = `${buttonWidth}px`;
  ripple.style.height = `${buttonHeight}px`;
  ripple.style.top = `${y}px`;
  ripple.style.left = `${x}px`;

  ripple.classList.add("rippleAnimation");

  setTimeout(() => {
    btn.removeChild(ripple);
  }, 500);
};

export default () => {
  const { isDown, onMouseDown, onMouseUp } = useMouseDown();

  return (
    <div
      className={`
            ${isDown ? "" : "hover:bg-gray-400 hover:bg-opacity-20"}
            absolute
            inset-0
        `}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    ></div>
  );
};
 */
