import { useEffect, useState, useRef } from "react";
import { isMoreThanWrapperAspectRatio } from "./helper";

let resizeObserver: any;

export const useResizeObserver = (divRef: any) => {
  const [resized, setResized] = useState(0);

  useEffect(() => {
    resizeObserver = new ResizeObserver((entries) => {
      /*  for (let entry of entries) {
            console.log("CHANGE", entry, entry.target === divRef.current);
            if (entry.contentBoxSize) {
              // Firefox implements `contentBoxSize` as a single content rect, rather than an array
                              const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
                    
                    h1Elem.style.fontSize = Math.max(1.5, contentBoxSize.inlineSize / 200) + 'rem';
                    pElem.style.fontSize = Math.max(1, contentBoxSize.inlineSize / 600) + 'rem';
     
            } else {
                              h1Elem.style.fontSize = Math.max(1.5, entry.contentRect.width / 200) + 'rem';
                    pElem.style.fontSize = Math.max(1, entry.contentRect.width / 600) + 'rem';
            }
          }
     */

      setResized((pResized) => pResized + 1);
      //console.log("Size changed");
    });

    resizeObserver.observe(divRef.current);
  }, []);

  return {
    resized,
  };
};

export const useIsMoreThanWrapperAspectRatio = (
  wrapperRef: any,
  photoAspectRatio: number
) => {
  const [isMore, setIsMore] = useState<boolean | undefined>(undefined);

  const mainRef: any = useRef({
    isInit: false,
    photoAspectRatio,
  });

  useEffect(() => {
    mainRef.current.resizeObserver = new ResizeObserver((entries) => {
      const isMoreThan = isMoreThanWrapperAspectRatio(
        mainRef.current.photoAspectRatio,
        entries[0].target
      );

      //console.log("Size changed", isMoreThan, entries[0].target);

      if (isMoreThan !== isMore) {
        setIsMore(isMoreThan);
      }
    });

    mainRef.current.resizeObserver.observe(wrapperRef.current);

    setIsMore(() =>
      isMoreThanWrapperAspectRatio(
        mainRef.current.photoAspectRatio,
        wrapperRef.current
      )
    );

    return () => {
      (mainRef.current.resizeObserver as ResizeObserver).disconnect();
      mainRef.current.resizeObserver = undefined;
    };
  }, []);

  return isMore;
};
