export const calcAspectRatio = (width: number, height: number) => {
  return Math.round((width / height) * 10) / 10;
};

export const isMoreThanWrapperAspectRatio = (
  photoAspectRatio: number,
  target: any
) => {
  const rect = target.getBoundingClientRect();

  let wrapperAspectRatio = calcAspectRatio(rect.width, rect.height);

  /* console.log(
    "isMoreThanWrapperAspectRatio",
    photoAspectRatio,
    wrapperAspectRatio,
    rect.width,
    rect.height
  ); */

  if (photoAspectRatio <= wrapperAspectRatio) {
    return false;
  } else {
    return true;
  }
};
