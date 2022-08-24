import React from "react";
import Jumbotron from "../components/jumbotron";
import jumboData from "../fixtures/jumbo.json";

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map(({ title, subtitle, image, alt }, index) => (
        <Jumbotron key={index}>
          <Jumbotron.Title>{title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{subtitle}</Jumbotron.SubTitle>
          <Jumbotron.Image src={image} alt={alt} />
        </Jumbotron>
        // console.log(image)
        // <Jumbotron.Image src={image} alt={alt} />
      ))}
    </Jumbotron.Container>
  );
}
