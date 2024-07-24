import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const nameContext = createContext();

const ComponentA = () => {
  const [name, setname] = useState("dave");

  return (
    <div>
      <div className="box">
        <p>Component A</p>
        <p>hello: {name}</p>
        <nameContext.Provider value={name}>
          <ComponentB />
        </nameContext.Provider>
      </div>
    </div>
  );
};

export default ComponentA;
