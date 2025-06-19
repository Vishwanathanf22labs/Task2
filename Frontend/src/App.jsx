import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/List";
import Add from "./components/Add";
import Edit from "./components/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
