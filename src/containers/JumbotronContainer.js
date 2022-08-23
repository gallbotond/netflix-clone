import React from "react";
import Jumbotron from "../components/jumbotron";
import jumboData from "../fixtures/jumbo.json";

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map(({ title, subtitle, image, alt }) => (
        <Jumbotron>
          <Jumbotron.Title>{title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{subtitle}</Jumbotron.SubTitle>
          <Jumbotron.Image src={"../../images/misc/home-tv.jpg"} alt={alt} />
          <img src="../../../images/misc/home-tv.jpg"></img>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
