import { ComponentProps, FC, useState } from "react";

export type PreloadBase64ImageProps = ComponentProps<"img"> & {
  base64?: string;
  index?: number;
};

const PreloadBase64Image: FC<PreloadBase64ImageProps> = ({
  base64,
  index,
  width,
  height,
  className,
  ...props
}) => {
  const [isBackground, setIsBackground] = useState(true);

  const onLoad = () => {
    //console.log("ON LOAD");
    setIsBackground(false);
  };

  return (
    <img
      className={`block m-a rounded-sm ${isBackground ? "bg-cover" : ""} ${
        className ? className : ""
      }`}
      style={{
        backgroundImage: isBackground
          ? `url("data:image/jpg;base64, ${base64}")`
          : undefined,
        height: height ? height : "auto",
        width: width ? width : "auto",
      }}
      data-index={index}
      onLoad={onLoad}
      {...props}
    />
  );
};

export default PreloadBase64Image;
