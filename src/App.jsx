import React from "react";
import Counter from "./Components/Counter";
import { Toaster } from "react-hot-toast";
import Homepage from "./Components/Homepage";
import NavBar from "./Components/NavBar";
import FetchAPI from "./Components/FetchAPI";
import { Navigate, Route, Routes } from "react-router-dom";
import UserDetails from "./Components/UserDetails";

const App = () => {
  return (
    <section className="min-h-screen bg-[#eee]">
      <Toaster />
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<FetchAPI />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </section>
  );
};

export default App;
