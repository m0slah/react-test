import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div>
      <div className="box">
        <p>Component B</p>
        <ComponentC />
      </div>
    </div>
  );
};

export default ComponentB;
