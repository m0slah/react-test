import { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const [name, setname] = useState("dave");

  return (
    <div>
      <div className="box">
        <p>Component A</p>
        <p>hello: {name}</p>
        <ComponentB name={name} />
      </div>
    </div>
  );
};

export default ComponentA;
