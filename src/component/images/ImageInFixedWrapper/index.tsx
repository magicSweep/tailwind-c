import { FC } from "react";
import PreloadBase64Image, {
  PreloadBase64ImageProps,
} from "./../PreloadBase64Image";

export const calcAspectRatio = (width: number, height: number) => {
  return Math.round((width / height) * 10) / 10;
};

export const getImageStyle = (
  photoAspectRatio: number,
  wrapperWidth: string,
  wrapperHeight: string
) => {
  let height, width;

  let parsedHeight = parseInt(wrapperHeight);
  let parsedWidth = parseInt(wrapperWidth);

  const wrapperAspectRatio = calcAspectRatio(parsedWidth, parsedHeight);

  if (photoAspectRatio <= wrapperAspectRatio) {
    width = `${Math.floor(parsedHeight * photoAspectRatio)}px`;
    height = wrapperHeight;
  } else {
    width = wrapperWidth;
    height = `${Math.floor(parsedWidth / photoAspectRatio)}px`;
  }

  return {
    //cursor: "pointer",
    width,
    height,
  };
};

export type ImageInFixedWrapperProps = PreloadBase64ImageProps & {
  //photo aspect ration
  aspectRatio: number;
};

const ImageInFixedWrapper: FC<ImageInFixedWrapperProps> = ({
  aspectRatio,
  ...props
}) => {
  const style = getImageStyle(
    aspectRatio,
    // wrapper width and height
    props.width as string,
    props.height as string
  );

  //console.log("[IMAGE FIXED WRAPPER] RENDER");

  return (
    <PreloadBase64Image {...props} {...style} className="cursor-pointer" />
  );
};

export default ImageInFixedWrapper;
