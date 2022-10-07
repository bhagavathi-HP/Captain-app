import React, { useContext, useState } from "react";
import { Available } from "../../context";
import "../../captain.css";
import Popup from "../../components/popup/popup";
const CaptainBox = () => {
  const captainAvailable = useContext(Available);
  const [trig, setTrig] = useState(false);
  return (
    <div>
      <h1>Hi iam Captain page</h1>

      <button className="borderbox 1" onClick={() => setTrig(true)}>
        Table 1
      </button>
      {trig && <Popup close={setTrig} />}
      <button className="borderbox" onClick={() => setTrig(true)}>
        Table 2
      </button>
      {trig && <Popup close={setTrig} />}
      <button className="borderbox" onClick={() => setTrig(true)}>
        Table 3
      </button>
      {trig && <Popup close={setTrig} />}
      <button className="borderbox" onClick={() => setTrig(true)}>
        Table 4
      </button>
      {trig && <Popup close={setTrig} />}
    </div>
  );
};

export default CaptainBox;
