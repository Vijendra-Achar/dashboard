import React from "react";

import "./App.scss";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="main">
      <Sidebar />

      <div className="main__container">
        <Header />

        <div className="main__sub-container">
          <div className="main__page">
            <Dashboard />
          </div>
          <div className="main__right-sidebar"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
