import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { React, Fragment, createContext } from "react";
import Navigation from "./routes/navigation";
import AdminBox from "./routes/admin/admin";
import CaptainBox from "./routes/captain/captain";

const App = () => {
  return (
    <div>
      <Fragment>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<AdminBox />} />
            <Route path="captain" element={<CaptainBox />} />
          </Route>
        </Routes>
      </Fragment>
    </div>
  );
};

export default App;
