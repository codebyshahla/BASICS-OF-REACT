import React from "react";

const States = ({ states }) => {

  return (
    <div>
      {states.map((state) => {
        <>
          <div> {state.name} </div>
        </>
})}
    </div>
  );
};

export default States;
