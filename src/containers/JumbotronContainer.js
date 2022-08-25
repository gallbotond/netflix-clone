import React from "react";
import { Jumbotron } from "../components";
import jumboData from "../fixtures/jumbo.json";

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map(({ title, subtitle, image, alt, order }, index) => (
        <Jumbotron key={index}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{subtitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Image order={order} src={image} alt={alt} />
        </Jumbotron>
        // console.log(image)
        // <Jumbotron.Image src={image} alt={alt} />
      ))}
    </Jumbotron.Container>
  );
}
