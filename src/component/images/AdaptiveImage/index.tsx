import React, {
  FC,
  MutableRefObject,
  ComponentProps,
  useEffect,
  //useRef,
  useState,
} from "react";
import { useIsMoreThanWrapperAspectRatio } from "./hook";

export type AdaptiveImageProps = ComponentProps<"img"> & {
  base64?: string;
  index?: number;
  photoAspectRatio: number;
  wrapperRef?: MutableRefObject<any>;
  zoom: number;
  //resized?: number;
  //isActive?: boolean;
};

export const calcAspectRatio = (width: number, height: number) => {
  return Math.round((width / height) * 10) / 10;
};

export const getImageStyle = (
  isMoreThanWrapperAspectRatio: boolean | undefined,
  //photoAspectRatio: number,
  isLoad: boolean,
  zoom: number,
  wrapperRef?: MutableRefObject<any>
) => {
  if (
    isMoreThanWrapperAspectRatio === undefined ||
    !wrapperRef ||
    !wrapperRef.current
  )
    return { width: "0", height: "0" };

  let height, width;

  const rect = wrapperRef.current.getBoundingClientRect();

  //let parsedHeight = rect.height;
  //let parsedWidth = rect.width;

  /* if (isLoad) {
      if (!isMoreThanWrapperAspectRatio) {
        width = `${Math.floor(parsedHeight * zoom * photoAspectRatio)}px`;
        height = `${parsedHeight * zoom}px`;
      } else {
        width = `${parsedWidth * zoom}px`;
        height = `${Math.floor((parsedWidth * zoom) / photoAspectRatio)}px`;
      }
    } else {
      if (!isMoreThanWrapperAspectRatio) {
        width = "auto";
        height = `${100 * zoom}%`;
      } else {
        width = `${100 * zoom}%`;
        height = "auto";
      }
    } */

  if (isLoad) {
    if (!isMoreThanWrapperAspectRatio) {
      width = "auto";
      height = `100%`;
    } else {
      width = `100%`;
      height = "auto";
    }
  } else {
    if (!isMoreThanWrapperAspectRatio) {
      width = "auto";
      height = `${100 * zoom}%`;
    } else {
      width = `${100 * zoom}%`;
      height = "auto";
    }
  }

  return {
    //cursor: "pointer",
    width,
    height,
  };
};

/* const useStyles = makeStyles({
  root: {
    display: "block",
    margin: "auto",
    position: "relative",
    //zIndex: 10,
  },
  base64Wrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    //zIndex: 9,
  },
  /* base64: {
      display: "block",
      margin: "auto",
    }, /
}); */

const AdaptiveImage: FC<AdaptiveImageProps> = ({
  photoAspectRatio,
  wrapperRef,
  //src,
  //srcSet,
  base64,
  //onImageClick,
  className,
  index,
  //resized,
  zoom,
  ...props
}) => {
  //const wrapperRef = useRef();

  const [isPhotoLoading, setIsPhotoLoading] = useState(true);

  const isMore = useIsMoreThanWrapperAspectRatio(wrapperRef, photoAspectRatio);

  //const styles = useStyles();

  const style = getImageStyle(
    isMore,
    //photoAspectRatio,
    isPhotoLoading,
    zoom,
    wrapperRef
  );

  const onLoad = () => {
    //console.log("ON LOAD");
    setIsPhotoLoading(false);
  };

  //console.log("RENDER ADAPTIVE IMAGE", isMore);

  if (style.width === "0") return null;

  return (
    <>
      <img
        className={`relative block m-a ${className ? className : ""}`}
        //  data-index={index}
        //onClick={onImageClick}
        //src={src}
        // data-src={src}
        //srcSet={srcSet}
        // alt={alt}
        //@ts-ignore
        //ref={wrapperRef}
        data-index={index}
        onLoad={onLoad}
        style={{ ...style }}
        {...props}
      />
      {isPhotoLoading && (
        <div
          className={`
            absolute inset-0 flex justify-center items-center overflow-hidden
        `}
        >
          <img
            /*  className={
                className ? `${className} ${styles.base64}` : styles.base64
              } */
            //  data-index={index}
            //  onClick={onImageClick}
            src={`data:image/jpg;base64, ${base64}`}
            // data-src={src}
            //  srcSet={srcSet}
            // alt={alt}
            style={{ ...style }}
            //{...style}
            //{...props}
          />
        </div>
      )}
    </>
  );
};

export default AdaptiveImage;
