import { useContext } from "react";
import { nameContext } from "./ComponentA";

const ComponentD = () => {
  const name = useContext(nameContext);

  return (
    <div>
      <div className="box">
        <p>Component D</p>
        <div>{`Bye ${name}!`}</div>
      </div>
    </div>
  );
};

export default ComponentD;
