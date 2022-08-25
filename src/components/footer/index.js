import React from "react";
import { Container } from "../jumbotron/styles/jumbotron";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
