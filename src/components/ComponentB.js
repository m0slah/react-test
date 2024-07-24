import ComponentC from "./ComponentC";

const ComponentB = ({ name }) => {
  return (
    <div>
      <div className="box">
        <p>Component B</p>
        <ComponentC name={name} />
      </div>
    </div>
  );
};

export default ComponentB;
