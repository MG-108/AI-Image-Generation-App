import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";

import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <Router>
      {/* 73PX IS NAVBAR HEIGHT */}
      <Navbar />
      <main className="min-h-[calc(100vh-73px)] w-full bg-[#f9fafe] px-4 py-8 sm:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
