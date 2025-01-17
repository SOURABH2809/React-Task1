import React from "react";
import { Routes, Route } from "react-router-dom";
import Toggle from "./pages/Toggle";
import Form from "./pages/Form";
import TodoList from "./pages/TodoList";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Toggle />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/form" element={<Form />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;
