import React, { useContext, useState } from "react";
import { Available } from "../../context";

const Popup = ({ close }) => {
  const popAvailable = useContext(Available);
  console.log("popAvailable", popAvailable);

  return (
    <div>
      <h1>This is my pop up</h1>
      <button onClick={() => close(false)}>close</button>
    </div>
  );
};

export default Popup;
