import React from "react";

import { Container } from "./styles";
import Card from "../Card";

export default function Dashboard() {
  return (
    <Container>
      <div className="row-1">
        <Card styles={{ height: 300, marginBottom: 20, marginRight: 20 }}></Card>
        <Card></Card>
      </div>
      <div className="row-2">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="row-3">
        <Card></Card>
        <Card></Card>
      </div>
    </Container>
  );
}
