import ComponentD from "./ComponentD";

const ComponentC = () => {
  return (
    <div className="box">
      <p>Component C</p>
      <ComponentD />
    </div>
  );
};

export default ComponentC;
