import React from "react";
import Home from "./Home";
import Crisis from "./Crisis";
import { Donate } from "./Donate";
import { Route, Routes } from "react-router-dom";
import Volunteer from "./Volunteer";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/crisis" element={<Crisis />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </>
  );
};

export default Router;
