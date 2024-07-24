import ComponentD from "./ComponentD";

const ComponentC = ({ name }) => {
  return (
    <div className="box">
      <p>Component C</p>
      <ComponentD name={name} />
    </div>
  );
};

export default ComponentC;
