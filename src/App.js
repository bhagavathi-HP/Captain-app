import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { React, Fragment } from "react";
import AdminBox from "./components/admin/admin";

const App = () => {
  return (
    <div>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AdminBox />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </div>
  );
};

export default App;
