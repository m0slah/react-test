import ComponentB from "./ComponentB";

const ComponentA = () => {
  return (
    <div>
      <div className="box">
        <p>Component A</p>
        <ComponentB />
      </div>
    </div>
  );
};

export default ComponentA;
