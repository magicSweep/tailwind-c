import { FC } from "react";

export interface HeroTitleProps {
  isCustom?: boolean;
  tailwindBgColor: string;
  tailwindWidth?: string;
  tailwindTop: string;
  tailwindShadow: string;
}

const HeroTitle: FC<HeroTitleProps> = ({
  children,
  tailwindBgColor,
  tailwindWidth,
  tailwindTop,
  tailwindShadow,
}) => {
  return (
    <div
      className={`
            absolute left-0 ${tailwindTop}
            w-full flex justify-center
            `}
    >
      <div
        className={`
                inline-flex ${tailwindShadow} rounded 
                px-8 py-2
                ${tailwindWidth ? tailwindWidth : ""}
                ${tailwindBgColor}
                text-title
            `}
      >
        {children}
      </div>
    </div>
  );
};

export default HeroTitle;
