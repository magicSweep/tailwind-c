import { useState, FC } from "react";
import CloudDownload from "./CloudDownload";
import EditIcon from "./EditIcon";
import ErrorIcon from "./ErrorIcon";
import ExitToAppIcon from "./ExitToAppIcon";
import InfoIcon from "./InfoIcon";
import LockIcon from "./LockIcon";
import PlusIcon from "./PlusIcon";
import SearchIcon from "./SearchIcon";
import SuccessIcon from "./SuccessIcon";
import WarningIcon from "./WarningIcon";
import CloseIcon from "./CloseIcon";
import ArrowIcon from "./ArrowIcon";
import AccountCircleIcon from "./AccountCircleIcon";

export default {
  component: AccountCircleIcon,
  title: "Icons",
};

const IconWrapper = ({ children, title }: any) => {
  return (
    <div className="flex flex-col justify-center items-center p-1 m-1 text-center">
      {children}
      <p>{title}</p>
    </div>
  );
};

export const Default = () => {
  return (
    <div>
      <IconWrapper title="ArrowIcon">
        <ArrowIcon width={32} height={32} direction="up" />
      </IconWrapper>
      <IconWrapper title="AccountCircleIcon">
        <AccountCircleIcon width={32} height={32} />
      </IconWrapper>
      <IconWrapper title="CloseIcon">
        <CloseIcon width={32} height={32} />
      </IconWrapper>
      <IconWrapper title="WarningIcon">
        <WarningIcon width={32} height={32} />
      </IconWrapper>
      <IconWrapper title="SuccessIcon">
        <SuccessIcon width={32} height={32} />
      </IconWrapper>
      <IconWrapper title="SearchIcon">
        <SearchIcon width={32} height={32} />
      </IconWrapper>
      <IconWrapper title="PlusIcon">
        <PlusIcon width={32} height={32} />
      </IconWrapper>
      <IconWrapper title="LockIcon">
        <LockIcon width={32} height={32} />
      </IconWrapper>
      <IconWrapper title="InfoIcon">
        <InfoIcon width={32} height={32} />
      </IconWrapper>
      <IconWrapper title="ExitToAppIcon">
        <ExitToAppIcon width={32} height={32} />
      </IconWrapper>
      <IconWrapper title="ErrorIcon">
        <ErrorIcon width={32} height={32} />
      </IconWrapper>
      <IconWrapper title="EditIcon">
        <EditIcon width={32} height={32} />
      </IconWrapper>
      <IconWrapper title="CloudDownload">
        <CloudDownload width={32} height={32} />
      </IconWrapper>
    </div>
  );
};
