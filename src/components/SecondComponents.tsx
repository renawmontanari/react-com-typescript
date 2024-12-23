import React from "react";

interface Props {
  name: string;
}

const SecondComponents = (props: Props) => {
  return (
    <div>
      <p>Segundo componente</p>
      <p>O nome dele é {props.name}!</p>
    </div>
  );
};

export default SecondComponents;
