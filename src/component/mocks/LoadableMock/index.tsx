import { useEffect, useState } from "react";
import Spinner from "../../progress/Spinner";

export default () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3000);
  }, []);

  if (load === false) return <Spinner />;

  return (
    <div
      className={`
            flex justify-center items-center
            bg-red-500
            min-h-36
            min-w-72
        `}
    >
      <p>Hello, from Loadable mock</p>
    </div>
  );
};
