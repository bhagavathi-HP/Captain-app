import React, { useContext, useState } from "react";
import { Available } from "../../context";
import "../../captain.css";
import Popup from "../../components/popup/popup";
const CaptainBox = () => {
  const captainAvailable = useContext(Available);
  console.log("Captain Available", captainAvailable);
  const [trig, setTrig] = useState(false);
  const mytrig=() => setTrig(true);
  return (
    <div>
      <h1>Hi iam Captain page</h1>

      <button className="borderbox 1" onClick={mytrig}>
        Table 1
      </button>
      {trig && <Popup close={setTrig} />}
      <button className="borderbox" onClick={mytrig}>Table 2</button>
      {trig && <Popup close={setTrig} />}
      <button className="borderbox" onClick={mytrig}>Table 3</button>
      <button className="borderbox" onClick={mytrig}>Table 4</button>
    </div>
  );
};

export default CaptainBox;
