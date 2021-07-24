import { FC } from "react";

export interface HeroTitleProps {
  isCustom?: boolean;
  tailwindBgColor: string;
  tailwindWidth?: string;
  tailwindTop: string;
}

const HeroTitle: FC<HeroTitleProps> = ({
  isCustom,
  children,
  tailwindBgColor,
  tailwindWidth,
  tailwindTop,
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
                inline-flex shadow rounded 
                px-8 py-3
                ${tailwindWidth ? tailwindWidth : ""}
                ${tailwindBgColor}
            `}
      >
        {children}
      </div>
    </div>
  );
};

export default HeroTitle;
