import { FC } from "react";

type THelperTextType = "success" | "error" | "disabled" | "body";

export interface IHelperTextProps {
  className?: string;
  messages?: string[];
  type: THelperTextType;
}

const getMessages = (type: THelperTextType, messages?: string[]) => {
  if (!messages || messages.length === 0) return null;

  return messages.map((msg, i) => {
    return <li key={`${Date.now()}_${i}`}>{`- ${msg}`}</li>;
  });
};

const HelperText: FC<IHelperTextProps> = ({ className, type, messages }) => {
  const msgs = getMessages(type, messages);

  return (
    <ul
      className={`
      w-full min-h-5 
      cursor-default 
      select-none
      align-baseline
      text-xs tracking-normal text-left
      text-${type}
      pl-0 mt-1 mb-0
      ${className ? className : ""}
    `}
      role="alert"
    >
      {msgs}
    </ul>
  );
};

export default HelperText;
