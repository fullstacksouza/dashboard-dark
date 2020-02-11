import React from "react";

import { Container, CardHeader, CardFooter, CardBody } from "./styles";
import { IoMdAddCircle, IoIosMore } from "react-icons/io";
export default function Card(props: any) {
  return (
    <Container style={props.styles}>
      <CardHeader>
        Teste
        <IoMdAddCircle size={25} color="#0093EE" cursor="pointer" />
      </CardHeader>
      <CardBody>{props.children}</CardBody>
      <CardFooter>
        View full statement
        <IoIosMore size={25} color="#0093EE" cursor="pointer" />
      </CardFooter>
    </Container>
  );
}
