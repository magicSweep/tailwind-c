import { FC, useEffect, useRef, useState } from "react";
import IconButton from "../../buttons/IconButton";
import ArrowIcon from "../../icons/ArrowIcon";
import CloudDownload from "../../icons/CloudDownload";
import EditIcon from "../../icons/EditIcon";
import ImageInFixedWrapper from "../../images/ImageInFixedWrapper";
import Tooltip from "../../portals/Tooltip";
import imagePath from "../../../static/ladki.jpg";

export type PhotoCardProps = {
  title: string;
  yearsOld: number;
};

export const Collapse = ({ show, children }: any) => {
  const containerRef = useRef(null);
  //const heightRef = useRef(0);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    console.log(
      "[USE EFFECT] COLLAPSED]",
      (containerRef.current as any).getBoundingClientRect()
    );

    setHeight((containerRef.current as any).getBoundingClientRect().height);
    //heightRef.current = (containerRef.current as any).getBoundingClientRect().height;
  });

  return (
    <div
      style={{
        transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        height: show ? `${height}px` : 0,
      }}
      onTransitionEnd={() => console.log("Transition end")}
    >
      <div ref={containerRef}>{show && children}</div>
    </div>
  );
};

export const Avatar = ({ children }: { children: any }) => {
  return (
    <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center">
      <p className="text-white select-none text-xl">{children}</p>
    </div>
  );
};

export const CardActions = ({ children }: { children: any }) => {
  return <div className="flex items-center p-2">{children}</div>;
};

export const Card = ({ children }: { children: any }) => {
  return (
    <div className="w-345 overflow-hidden rounded shadow bg-paper">
      {children}
    </div>
  );
};

export const CardHeader = ({
  title,
  avatarContent,
}: {
  title: string;
  avatarContent: any;
}) => {
  return (
    <div className="p-4 flex items-center">
      <Avatar>{avatarContent}</Avatar>
      <p className="text-left select-none text-title ml-4">{title}</p>
    </div>
  );
};

export const CardImage = ({ children }: { children: any }) => {
  return (
    <div className="w-full h-194 bg-black flex items-center justify-center">
      {children}
    </div>
  );
};

const PhotoCard: FC<PhotoCardProps> = ({ title, yearsOld }) => {
  const [show, setShow] = useState(false);

  return (
    <Card>
      <CardHeader title={title} avatarContent={yearsOld} />

      <CardImage>
        <ImageInFixedWrapper
          height="194px"
          width="345px"
          base64={""}
          src={imagePath}
          srcSet={""}
          index={3}
          aspectRatio={1.6}
          onClick={() => console.log("Image Click")}
        />
      </CardImage>

      <CardActions>
        <Tooltip text="Редактировать">
          <IconButton color="transparent">
            <EditIcon width={22} height={22} className={`fill-secondary`} />
          </IconButton>
        </Tooltip>

        <Tooltip text="Скачать оригинальный файл">
          <IconButton color="transparent">
            <CloudDownload
              width={22}
              height={22}
              className={`fill-secondary`}
            />
          </IconButton>
        </Tooltip>

        <div className="ml-auto">
          <IconButton
            color="transparent"
            onClick={() => setShow((prev) => !prev)}
          >
            <ArrowIcon
              direction={show ? "up" : "down"}
              width={12}
              height={12}
              className={`fill-secondary`}
            />
          </IconButton>
        </div>
      </CardActions>

      <Collapse show={show}>
        <div className="text-center p-4">
          <p>Пошли мы как-то на охоту...</p>
        </div>
      </Collapse>
    </Card>
  );
};

export default PhotoCard;
