import { Component } from "react";
//import Alert from "../Alert/Alert";
import Portal from "../portals/Portal";
//import classes from "./ErrorBoundary.module.scss";
//import { Typography } from "@material-ui/core";
//import MaterialLink from "@material-ui/core/Link";

//import Button from '../UI/Button/Button';

/* interface ErrorBoundaryProps  {
    
} */

class ErrorBoundary extends Component {
  state: { hasError: boolean; error?: Error } = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log("ERROR_BOUNDARY", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI

      return (
        <Portal type="modal">
          <div
            className={`
              fixed top-0 left-0
              flex justify-center items-center
              h-full w-full
          `}
          >
            <div
              className={`
              relative
              overflow-y-auto
              flex flex-col flex-nowrap items-stretch
              shadow-lg rounded-md
              bg-red-500
              px-6 py-6
              min-w-72 min-h-36
              max-w-101 max-h-101
              pointer-events-auto
              box-border
            `}
            >
              <h5 className={"text-center pb-0"}>Какая-то ошибочка...</h5>
              <ul className="list-none m-0">
                <li>
                  <p>- Проверьте интернет соединение.</p>
                </li>
                {/* <li>
                      Попробуйте 
                      <Button 
                        label={"еще раз."} 
                        type={"CONTAINED"}
                        onClick={() => this.setState({hasError: false})}
                        ariaLabel={"Перезагрузить страницу."}
                      />
                    </li> */}
                <li>
                  <p>- Попробуйте перезагрузить страницу.</p>
                </li>

                {/*  <li>
              <Typography color="textSecondary">
                <MaterialLink href="/">- На главную страницу.</MaterialLink>
              </Typography>
            </li> */}
              </ul>
            </div>
          </div>
        </Portal>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
