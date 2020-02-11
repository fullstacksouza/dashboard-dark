import React from "react";
// import { Container } from './styles';
import Header from "./components/Header";
import Aside from "./components/Aside";
import Dashboard from "./components/Dashboard";
import nav from "./components/nav";
export default function Main() {
  return (
    <div style={{ background: "#212f41", display: "flex", flexDirection: "row", flex: 10 }}>
      <Aside nav={nav} />
      <div style={{ display: "flex", flex: 8, flexDirection: "column" }}>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}
