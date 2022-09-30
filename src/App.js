import "./App.css";
import { Routes, Route } from "react-router-dom";
import { React, Fragment } from "react";
import AdminBox from "./components/admin/admin";

const App = () => {
  return (
    <div>
      <Fragment>
        <Routes>
          <Route path="/" element={AdminBox} />
        </Routes>
      </Fragment>
    </div>
  );
};

export default App;
