import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "../../ErrorBoundary";
import { usePortal } from "./hook";
import { PortalProps } from "./types";
//import styles from "./../../styles/classes.module.scss";
//import classes from "./Portal.module.scss";

const Portal: FC<PortalProps> = ({ children, type }) => {
  const element = usePortal(type);

  //console.log("[RENDER PORTAL]");

  //if (!elementRef.current) return null;

  return ReactDOM.createPortal(
    <ErrorBoundary>{children}</ErrorBoundary>,
    element
  );
};

export default Portal;

/*import React, { FC, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "../../ErrorBoundary";
import { usePortal } from "./hook";
//import styles from "./../../styles/classes.module.scss";
//import classes from "./Portal.module.scss";



 const Portal: FC<PortalProps> = ({ children, type }) => {
  const element = usePortal(type);

  console.log("[RENDER PORTAL]");

  //if (!elementRef.current) return null;

  return ReactDOM.createPortal(
    <ErrorBoundary>{children}</ErrorBoundary>,
    element
  );
};

export default Portal; */
